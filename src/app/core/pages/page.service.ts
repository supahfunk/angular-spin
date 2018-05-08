import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { EntityService } from '../models';
import { Page } from './page';

@Injectable()
export class PageService extends EntityService<Page> {

	getCollection(): string {
		return 'page';
	}

	getPageBySlug(slug: string): Observable<Page[]> {
		// console.log('PageService.getPageBySlug', slug);
        /*
        if (!slug.trim()) {
            return of(null); // returning a null observable
        }
        */
		return this.http.get<Page[]>(`${this.url}/?slug=${slug}`).pipe(
			tap(x => this.log(`found pages matching "${slug}"`)),
			catchError(this.handleError<Page[]>('getPageBySlug', []))
		);
	}

}
