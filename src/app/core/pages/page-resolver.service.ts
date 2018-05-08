
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Logger } from '../logger';
import { RouteService } from '../routes';
import { PageResolver } from './page-resolver';
import { PageService } from './page.service';
import { Pages } from './pages';

@Injectable()
export class PageResolverService implements Resolve<PageResolver> {

	constructor(
		private logger: Logger,
		private pageService: PageService,
		private router: Router,
		private config: Pages,
		private routeService: RouteService,
	) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageResolver> {
		// console.log('PageResolverService.resolve', route.url);
		const slug = this.routeService.getSlug(route.url);
		return this.pageService.getPageBySlug(slug).pipe(
			take(1),
			map(pages => {
				if (pages && pages.length) {
					// console.log('PageResolverService.page', pages[0]);
					return new PageResolver(pages[0], this.config);
				} else {
					// console.log('routeService', this.routeService);
					this.router.navigate(this.routeService.getLinkSegments(['not-found']));
					return null;
				}
			}), );
	}

}
