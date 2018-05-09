

import { Location } from '@angular/common';
import { NavigationStart, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

export class RouteService {

	public labels: any;
	public currentLang: string;
	public currentMarket: string;

	constructor(
		private translateService: TranslateService,
		private location: Location,
		private router: Router,
	) {
		this.init();
	}

	private init() {
		this.currentMarket = 'it'; // todo
		this.initLanguages();
		this.subscribeRouter();
	}

	private initLanguages() {
		this.currentLang = environment.defaultLanguage;
		this.translateService.addLangs(environment.languages.map(x => x.lang));
		this.translateService.setDefaultLang(environment.defaultLanguage);
		this.translateService.onLangChange.subscribe((e: LangChangeEvent) => {
			console.log('RouteService.onLangChange', e.translations);
		});
		this.labels = this.translateService.use(environment.defaultLanguage);
		/*
		if (isPlatformServer(this.platformId)) {
			let acceptLanguage: string = this.req.headers['accept-language'];

			if (Comparator.isStringEmpty(acceptLanguage)) {
				return this.translateService.use('en');
			} else {
				let languages: string[] = acceptLanguage.match(/[a-zA-Z\-]{2,10}/g) || [];

				if (languages.length > 0) {
				let userLang: string = languages[0].split('-')[0];
				userLang = /(de|en|fr|it)/gi.test(userLang) ? userLang : 'en';

				return this.translateService.use(userLang);
				} else {
				return this.translateService.use('en');
				}
		}
			} else {
			const lang: string = this.translateService.getBrowserLang();
			const match = (lang || '').match(/(en|de|fr|it)/);

			return this.translateService.use(match ? match[0] : 'en');
			}
		}
		*/
	}

	private subscribeRouter() {
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
					if (lang !== this.translateService.currentLang) {
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
			if (path.indexOf(`/${this.translateService.currentLang}`) === 0) {
				path = path.replace(`/${this.translateService.currentLang}`, `/${lang}`);
			} else {
				path = `/${lang}` + path;
			}
			if (silent) {
				this.currentLang = lang;
				this.translateService.use(lang);
				this.location.replaceState(path);
			} else {
				this.router.navigate([path]);
			}
			console.log('path', path, this.translateService.currentLang, lang);
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
