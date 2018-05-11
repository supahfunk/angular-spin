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
		return this.http.get<Label[]>(`${this.url}/?lang=${lang}`).pipe(
			take(1),
			map((x: Label[]) => x[0] ? x[0].labels : of(null)),
			tap(x => this.log(`found label matching "${lang}"`)),
			catchError(this.handleError<Label[]>('getTranslation', []))
		);
	}

}

export function CustomTranslateLoader(http: HttpClient, logger: Logger) {
	return new LabelService(http, logger);
}

