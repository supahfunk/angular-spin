import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { Logger } from '../logger';
import { EntityService } from '../models';
import { Label } from './label';

@Injectable()
export class LabelService extends EntityService<Label> implements TranslateLoader {

	getCollection(): string {
		return 'label';
	}

	getTranslation(lang: string): Observable<any> {
		if (!lang || !lang.trim()) {
			return of([]);
		}
		// console.log('LabelService.getTranslation', `${this.url}/?lang=${lang}`);
		return this.http.get<Label[]>(`${this.url}/?lang=${lang}`).pipe(
			take(1),
			map((x: Label[]) => x[0] ? x[0].labels : of(null)),
			tap(x => this.log(`found label matching "${lang}"`)),
			catchError(this.handleError<Label[]>('getTranslation', []))
		);
		/*
		return this.http.get<Label[]>(`${this.url}/?lang=${lang}`).pipe(
			tap(x => this.log(`found labels matching "${lang}"`)),
			catchError(this.handleError<Label[]>('getTranslation', []))
		);
		*/
		// return Observable.of({ KEY: 'value' });
	}

	/*
	getPageBySlug(slug: string): Observable<Label[]> {
		// console.log('PageService.getPageBySlug', slug);
        return this.http.get<Page[]>(`${this.url}/?slug=${slug}`).pipe(
			tap(x => this.log(`found pages matching "${slug}"`)),
			catchError(this.handleError<Page[]>('getPageBySlug', []))
		);
	}
	*/

}

export function CustomTranslateLoader(http: HttpClient, logger: Logger) {
	return new LabelService(http, logger);
}

