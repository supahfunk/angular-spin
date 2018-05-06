import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { EntityService } from '../models';
import { Page } from './page';

@Injectable()
export class PageService extends EntityService<Page> {

    getFactory(): Page {
        return new Page();
    }

    getPageBySlug(slug: string): Observable<Page[]> {
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
