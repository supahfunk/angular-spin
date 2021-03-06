


import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/concatMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { environment } from '../../../../environments/environment';
import { OnceService } from '../../once';
import { RouteService } from '../../routes';
import { LocalStorageService, StorageService } from '../../storage';

export class FacebookConfig {
	public appId: number;
	public fields: string = 'id,name,first_name,last_name,email,gender,picture,cover,link';
	public scope: string = 'public_profile, email'; // publish_stream
	public tokenClient: string;
	public version: string = 'v2.10';
}

export class FacebookAuthResponse {
	accessToken: string;
	expiresIn: number;
	signedRequest: string;
	userID: string;
}

export class FacebookPictureData {
	height: number;
	is_silhouette: boolean;
	url: string;
	width: number;
}

export class FacebookPicture {
	data: FacebookPictureData;
}

export class FacebookUser {
	email: string;
	first_name: string;
	id: string;
	last_name: string;
	name: string;
	picture: FacebookPicture;
	authResponse?: FacebookAuthResponse;
	facebookToken?: string;
}

@Injectable()
export class FacebookService {

	public authResponse: FacebookAuthResponse;
	public storage: StorageService;
	private options: FacebookConfig;
	private FB: any;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private storageService: LocalStorageService,
		private onceService: OnceService,
		private routeService: RouteService,
	) {
		this.init();
	}

	init(): void {
		if (!environment['plugins'] && !environment['plugins']['facebook']) {
			throw new Error('FacebookService.error missing config object in environment.plugins.facebook');
		}
		this.options = Object.assign(new FacebookConfig(), environment['plugins']['facebook'] as FacebookConfig);
		this.storage = this.storageService.tryGet();
		this.authResponse = this.storage.get('facebook');
		// console.log('FacebookService.authResponse', this.authResponse);
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	*  call FacebookService.facebook on component OnInit to avoid popup blockers via asyncronous loading *
	* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	facebook(): Observable<any> {
		if (isPlatformBrowser(this.platformId)) {
			if (this.FB) {
				return of(this.FB);
			} else {
				return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').concatMap(x => {
					// console.log(x);
					const FB = window['FB'];
					FB.init({
						appId: this.options.appId,
						// status: true,
						cookie: true,
						xfbml: true,
						version: this.options.version,
					});
					this.FB = FB;
					return of(FB);
				});
			}
		} else {
			return of(null);
		}
	}

	status() {
		return fromPromise(new Promise((resolve, reject) => {
			this.facebook().subscribe(x => {
				x.getLoginStatus((r) => {
					this.authResponse = null;
					if (r.status === 'connected') {
						this.authResponse = r.authResponse;
						this.storage.set('facebook', r.authResponse);
						resolve(r);
					} else if (r.status === 'not_authorized') {
						this.storage.delete('facebook');
						reject(r);
					} else {
						reject(r);
					}
				}, { scope: this.options.scope });
			});
		}));
	}

	login() {
		return fromPromise(new Promise((resolve, reject) => {
			this.facebook().subscribe(x => {
				x.login((r) => {
					this.authResponse = null;
					if (r.status === 'connected') {
						this.authResponse = r.authResponse;
						this.storage.set('facebook', r.authResponse);
						resolve(r);
					} else if (r.status === 'not_authorized') {
						this.storage.delete('facebook');
						reject(r);
					} else {
						reject(r);
					}
				}, { scope: this.options.scope });
			});
		}));
	}

	logout(): Observable<any> {
		return fromPromise(new Promise((resolve, reject) => {
			this.facebook().subscribe(x => {
				x.logout(r => {
					resolve(r);
					this.storage.delete('facebook');
				});
			});
		}));
	}

	getMe(fields?: string): Observable<FacebookUser> {
		return fromPromise(new Promise((resolve, reject) => {
			return this.login().subscribe(x => {
				fields = fields || this.options.fields;
				console.log(x);
				this.FB.api('/me', {
					fields: fields,
					accessToken: this.options.tokenClient,
				}, (r) => {
					if (!r || r.error) {
						const error = r ? r.error : 'error';
						console.log('FacebookService.getMe.error', error);
						reject(r.error);
					} else {
						const user = r as FacebookUser;
						user.authResponse = this.authResponse;
						user.facebookToken = this.authResponse.accessToken;
						console.log('FacebookService.getMe.success', user);
						resolve(user);
					}
				});
			});
		}));
	}

}
