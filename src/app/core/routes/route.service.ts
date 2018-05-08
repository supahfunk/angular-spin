

import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

export class RouteService {

	constructor(
		private translateService: TranslateService,
	) {

	}

	getLinkSegments(segments: any[] | string): string[] {
		segments = segments != null ? (Array.isArray(segments) ? segments : [segments]) : [];
		let out = segments.slice();
		if (environment.useMarket) {
			let market: string = 'IT';
			out.unshift(market);
		}
		if (environment.useLang) {
			let lang: string = this.translateService.currentLang;
			out.unshift(lang);
		}
		out.unshift('/');
		// console.log('RouteService.getLinkSegments', segments.join('/'), out.join('/'));
		return out;
	}

	getSlug(segments: any[]): string {
		segments = segments != null ? (Array.isArray(segments) ? segments : [segments]) : [];
		let out = segments.slice();
		if (environment.useLang && out.length && out[0].path === this.translateService.currentLang) {
			out.shift();
		}
		if (environment.useMarket && out.length && out[0].path === this.translateService.currentLang) {
			out.shift();
		}
		let slug = '/' + out.join('/');
		// console.log('RouteService.getSlug', segments.join('/'), slug);
		return slug;
	}

}
