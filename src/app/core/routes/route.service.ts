

import { Route, Routes } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';

export class RouteService {

	constructor(
		private translateService: TranslateService,
	) {

	}

	getLinkSegments(commands: any[] | string): string[] {
		if (commands != null) {
			commands = Array.isArray(commands) ? commands : [commands];
		} else {
			commands = [];
		}
		if (environment.useMarket) {
			const market: string = 'IT';
			commands.unshift(market);
		}
		if (environment.useLang) {
			const lang: string = this.translateService.currentLang;
			commands.unshift(lang);
		}
		return commands;
	}

	getSlug(segments: any[]): string {
		if (segments != null) {
			segments = Array.isArray(segments) ? segments : [segments];
		} else {
			segments = [];
		}
		segments = segments.slice();
		if (environment.useLang && segments.length && segments[0].path === this.translateService.currentLang) {
			segments.shift();
		}
		if (environment.useMarket && segments.length && segments[0].path === this.translateService.currentLang) {
			segments.shift();
		}
		const slug = segments.join('/');
		console.log('RouteService.getSlug', slug);
		return slug;
	}

	static setRoute(route: Route): Route {
		if (route.path) {
			if (environment.useMarket) {
				route.path = `:market/${route.path}`;
			}
			if (environment.useLang) {
				route.path = `:lang/${route.path}`;
			}
		}
		return route;
	}

	static setRoutes(routes: Routes): Routes {
		return routes.map(x => {
			x = this.setRoute(x);
			return x;
		});
	}

	static getLink(link: string): string {
		const lang: string = 'it';
		const market: string = 'IT';
		if (environment.useMarket) {
			link = `${market}/${link}`;
		}
		if (environment.useLang) {
			link = `${lang}/${link}`;
		}
		return link;
	}

}
