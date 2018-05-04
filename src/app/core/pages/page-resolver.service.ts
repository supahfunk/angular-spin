import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { PageResolver } from './page-resolver';
import { PageService } from './page.service';
import { Page } from './page';
import { PageComponent } from './page.component';
import { PageConfig } from './page.config';


@Injectable()
export class PageResolverService implements Resolve<PageResolver> {

	constructor(
		private pageService: PageService,
		private router: Router,
		private config: PageConfig,
	) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageResolver> {
		const slug = route.url.join('/');

		console.log('PageResolverService', slug);

		return this.pageService.getPageBySlug(slug).take(1).map(pages => {
			if (pages && pages.length) {
				console.log(pages[0]);
				return new PageResolver(pages[0], this.config);
			} else {
				this.router.navigate(['/not-found']);
				return null;
			}
		});
	}

}
