
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { PageResolver } from './page-resolver';
import { PageConfig } from './page.config';
import { PageService } from './page.service';

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
        return this.pageService.getPageBySlug(slug).pipe(
            // .do(page => console.log(page))
            take(1),
            map(pages => {
                if (pages && pages.length) {
                    // console.log('PageResolverService.page', pages[0]);
                    return new PageResolver(pages[0], this.config);
                } else {
                    this.router.navigate(['/not-found']);
                    return null;
                }
            }), );
    }

}
