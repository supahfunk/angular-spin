

import { Location } from '@angular/common';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

export class RouteService {

	public currentMarket: string = 'it';

	constructor(
		private translateService: TranslateService,
		private location: Location,
		private router: Router,
	) {
		this.init();
	}

	init() {
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
		if (lang !== this.translateService.currentLang) {
			let path = this.location.path();
			if (path.indexOf(`/${this.translateService.currentLang}`) === 0) {
				path = path.replace(`/${this.translateService.currentLang}`, `/${lang}`);
			} else {
				path = `/${lang}` + path;
			}
			if (silent) {
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
