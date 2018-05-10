


import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/concatMap';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { environment } from '../../../../environments/environment';
import { OnceService } from '../../once';
import { RouteService } from '../../routes';

export class FacebookConfig {
	public appId: number;
	public fields: string = 'id,name,first_name,last_name,email,gender,picture,cover,link';
	public scope: string = 'public_profile, email'; // publish_stream
	public version: string = 'v2.10';
}

@Injectable()
export class FacebookService {

	private options: FacebookConfig;
	private FB: any;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private onceService: OnceService,
		private routeService: RouteService,
	) {
		if (!environment['plugins'] && !environment['plugins']['facebook']) {
			throw new Error('FacebookService.error missing config object in environment.plugins.facebook');
		}
		this.options = environment['plugins']['facebook'] as FacebookConfig;

		const authResponse = {}; // storage.get('facebook');
		/*
		authResponse = {
		    accessToken: "accessTokenXXXXX",
		    expiresIn: 4962,
		    signedRequest: "signedRequestXXXXX",
		    userID: "10214671620773661",
		}
		*/
		console.log('FacebookService.authResponse', authResponse);
	}

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	*  call FacebookService.init on component OnInit to avoid popup blockers via asyncronous loading  *
	* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	init(): Observable<any> {
		if (isPlatformBrowser(this.platformId)) {
			if (this.FB) {
				return of(this.FB);
			} else {
				return this.onceService.script('//connect.facebook.net/' + this.routeService.currentLang + '/sdk.js', 'fbAsyncInit').concatMap(x => {
					console.log(x);
					const FB = window['FB'];
					FB.init({
						appId: this.options.appId,
						status: true,
						cookie: true,
						xfbml: true,
						version: this.options.version,
					});
					this.FB = FB;
					return of(this.FB);
				});
			}
		} else {
			return of(null);
		}
	}

	getMe(fields: string): Observable<any> {
		return this.init().pipe(x => {
			fields = fields || this.options.fields;
			return fromPromise(this.FB.api('/me', {
				fields: fields
			}, (response) => {
				if (!response || response.error) {
					const error = response ? response.error : 'error';
					console.log('FacebookService.getMe.error', error);
					return of(null);
				} else {
					console.log('FacebookService.getMe.success', response);
					return of(response);
				}
			}));
		});
	}

}
/*

(function () {
	"use strict";

	var app = angular.module('artisan');

	app.service('FacebookService', ['$promise', '$once', 'LocalStorage', 'environment', function ($promise, $once, storage, environment) {

		var service = this;

		var statics = {
			require: FacebookRequire,
			login: FacebookLogin,
			logout: FacebookLogout,
			status: FacebookStatus,
			getMe: FacebookGetMe,
			getMyPicture: FacebookGetMyPicture,
		};

		angular.extend(service, statics);

		// private vars

		if (!environment.plugins.facebook) {
			trhow('FacebookService.error missing config object in environment.plugins.facebook');
		}

		var config = environment.plugins.facebook;

		// statics methods

		* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
		 *  calling facebook initializer on page load to avoid popup blockers via asyncronous loading  *
		 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

		var authResponse = storage.get('facebook');

		//
		//authResponse = {
		//    accessToken: "accessTokenXXXXX",
		//    expiresIn: 4962,
		//    signedRequest: "signedRequestXXXXX",
		//    userID: "10214671620773661",
		//}
		//

		console.log('facebook.storage', authResponse);

		function FacebookRequire() {
			return Facebook();
		}

		function Facebook() {
			return $promise(function (promise) {
				if (window.FB !== undefined) {
					promise.resolve(window.FB);
				} else {
					FacebookOnce().then(function (success) {
						promise.resolve(window.FB);
					}, function (error) {
						promise.reject(error);
					});
				}
			});
		}

		function FacebookOnce() {
			return $promise(function (promise) {
				$once.script('//connect.facebook.net/' + environment.language.culture + '/sdk.js', 'fbAsyncInit').then(function () {
					// console.log('FacebookOnce.fbAsyncInit', window.FB);
					window.FB.init({
						appId: config.appId,
						status: true,
						cookie: true,
						xfbml: true,
						version: config.version,
					});
					promise.resolve(window.FB);
					// window.fbAsyncInit = null;
				}, function (error) {
					promise.reject(error);
				});
			});
		}

		function FacebookStatus(response, promise, init) {
			service.authResponse = null;
			if (response.status === 'connected') {
				service.authResponse = response.authResponse;
				storage.set('facebook', response.authResponse);
				promise.resolve(response);
			} else if (response.status === 'not_authorized') {
				storage.delete('facebook');
				if (init) {
					promise.resolve(response);
				} else {
					promise.reject(response);
				}
			} else {
				promise.reject(response);
			}
		}

		function FacebookGetMe(fields) {
			fields = fields || config.fields;
			return $promise(function (promise) {
				FacebookLogin().then(function (response) {
					window.FB.api('/me', {
						fields: fields
					}, function (response) {
						if (!response || response.error) {
							var error = response ? response.error : 'error';
							console.log('FacebookGetMe.error', error);
							promise.reject(error);

						} else {
							console.log('FacebookGetMe.success', response);
							promise.resolve(response);

						}
					});
				});
			});
		}

		function FacebookGetMyPicture(size) {
			size = size || 300;
			return $promise(function (promise) {
				FacebookLogin().then(function (facebook) {
					window.FB.api('/me/picture', {
						width: size,
						height: size,
						type: 'square'
					}, function (response) {
						if (!response || response.error) {
							var error = response ? response.error : 'error';
							console.log('FacebookGetMyPicture.error', error);
							promise.reject(error);

						} else {
							console.log('FacebookGetMyPicture.success', response);
							promise.resolve(response);

						}
					});
				});
			});
		}

		function FacebookLogin() {
			return $promise(function (promise) {
				Facebook().then(function (facebook) {
					console.log('FacebookLogin', facebook);
					facebook.login(function (response) {
						FacebookStatus(response, promise);
					}, {
						scope: config.scope
					});
				});
			});
		}

		function FacebookLogout() {
			return $promise(function (promise) {
				Facebook().then(function (facebook) {
					facebook.logout(function (response) {
						promise.resolve(response);
					});
				});
			});
		}

    }]);

}());
*/
