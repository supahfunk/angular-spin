import { Injectable } from '@angular/core';
import { Route, Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Logger } from '../logger/logger';

@Injectable()
export class TitleService {

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private title: Title,
		private logger: Logger,
	) { }

	setTitle(): any {
		return this.router.events
			.filter(event => event instanceof NavigationEnd)
			.map(() => {
				let child = this.activatedRoute.firstChild;
				while (child.firstChild) {
					child = child.firstChild;
				}
				if (child.snapshot.data && child.snapshot.data['title']) {
					return child.snapshot;
				} else {
					return null;
				}
			}).subscribe((snapshot: ActivatedRouteSnapshot) => {
				if (snapshot) {
					this.title.setTitle(snapshot.data.title);
					this.log(`TitleService.setTitle ${snapshot.data.title} of route ${snapshot}`);
				}
			});
	}

	private log(log: string) {
		this.logger.add('TitleService: ' + log);
	}
}
