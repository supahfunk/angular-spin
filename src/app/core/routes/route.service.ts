

import { Location, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injector, PLATFORM_ID } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export class RouteService {

	private _language: any = new BehaviorSubject({});
	public readonly language: Observable<any> = this._language.asObservable();

	private _languages: BehaviorSubject<Array<any>> = new BehaviorSubject(Array([]));
	public readonly languages: Observable<any[]> = this._languages.asObservable();

	public currentLang: string;
	public currentMarket: string;
	public currentLanguage: any;
	public translations: Observable<any>;

	public clock: Observable<any>;

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private injector: Injector,
		private translateService: TranslateService,
		private location: Location,
		private router: Router,
	) {
		this.setup();
		this.clock = interval(1000).pipe(
			map(() => {
				return { value: Math.random() };
			})
		);
	}

	private setup() {
		this.currentMarket = 'it'; // todo
		this.setLanguages();
		this.subscribeToRouter();
	}

	private setLanguages() {
		this._languages.next(environment.languages);
		this.translateService.addLangs(environment.languages.map(x => x.lang));
		this.translateService.setDefaultLang(environment.defaultLanguage);
		this.translateService.onLangChange.subscribe((e: LangChangeEvent) => {
			console.log('RouteService.onLangChange', e);
		});
		this.setLanguage(this.detectLanguage(), true);
	}

	private detectLanguage(): string {
		let acceptLanguage: string = null;
		if (isPlatformServer(this.platformId)) {
			/*
			// server side express engine
			app.engine('html',  (_, options, callback) => {
				let engine = ngExpressEngine({
					bootstrap: ServerAppModule,
					providers: [ { provide: 'request', useFactory: () => options.req } ]
				});
				engine(_, options, callback)
			})
			*/
			const request = this.injector.get('request');
			if (request) {
				acceptLanguage = request.headers['accept-language'];
				const languages: string[] = acceptLanguage.match(/[a-zA-Z\-]{2,10}/g) || [];
				if (languages.length > 0) {
					acceptLanguage = languages[0].split('-')[0];
				} else {
					acceptLanguage = null;
				}
				console.log('request', request, 'acceptLanguage', acceptLanguage);
			}
			console.log('RouteService.isPlatformServer', this.platformId, acceptLanguage);
		} else if (isPlatformBrowser(this.platformId)) {
			acceptLanguage = this.translateService.getBrowserLang();
			console.log('RouteService.isPlatformBrowser', this.platformId, acceptLanguage);
		}
		let detectedLanguage: string = environment.defaultLanguage;
		const regexp: RegExp = new RegExp(`(${environment.languages.map(x => x.lang).join('|')})`, 'gi');
		const match = (acceptLanguage || '').match(regexp);
		detectedLanguage = match ? match[0] : detectedLanguage;
		console.log('RouteService.detectLanguage', detectedLanguage);
		return detectedLanguage;
	}

	private subscribeToRouter() {
		this.router.events.subscribe((e) => {
			if (e instanceof NavigationStart) {
				const location = this.location.normalize(e.url).split('/');
				if (environment.useMarket) {
					const market = location[environment.useLang ? 2 : 1];
					if (market !== this.currentMarket) {
						this.currentMarket = market;
						console.log('RouteService.setMarket', market, e.url);
					}
				}
				if (environment.useLang) {
					const lang = location[1];
					if (lang !== this.currentLang) {
						this.currentLanguage = this._languages.getValue().find(x => x.lang === lang);
						this._language.next(this.currentLanguage);
						this.translateService.use(lang);
						console.log('RouteService.setLang', lang, e.url);
					}
				}
				// console.log(e instanceof NavigationEnd);
			}
		});
	}

	setLanguage(lang: string, silent?: boolean) {
		if (lang !== this.currentLang) {
			let path = this.location.path();
			if (path.indexOf(`/${this.currentLang}`) === 0) {
				path = path.replace(`/${this.currentLang}`, `/${lang}`);
			} else {
				path = `/${lang}` + path;
			}
			if (silent) {
				this.currentLang = lang;
				this.currentLanguage = this._languages.getValue().find(x => x.lang === lang);
				this._language.next(this.currentLanguage);
				this.translations = this.translateService.use(lang);
				this.location.replaceState(path);
			} else {
				this.router.navigate([path]);
			}
			console.log('RouteService.setLanguage', path, this.currentLang, lang, silent);
		}
	}

	getLinkSegments(segments: any[] | string): string[] {
		segments = segments != null ? (Array.isArray(segments) ? segments : [segments]) : [];
		const out = segments.slice();
		if (environment.useMarket) {
			const market = 'IT';
			out.unshift(market);
		}
		if (environment.useLang) {
			const lang: string = this.translateService.currentLang;
			out.unshift(lang);
		}
		out.unshift('/');
		// console.log('RouteService.getLinkSegments', segments.join('/'), out.join('/'));
		return out;
	}

	getSlug(segments: any[]): string {
		segments = segments != null ? (Array.isArray(segments) ? segments : [segments]) : [];
		const out = segments.slice();
		if (environment.useLang && out.length && out[0].path === this.translateService.currentLang) {
			out.shift();
		}
		if (environment.useMarket && out.length && out[0].path === this.translateService.currentLang) {
			out.shift();
		}
		const slug = '/' + out.join('/');
		// console.log('RouteService.getSlug', segments.join('/'), slug);
		return slug;
	}

}
