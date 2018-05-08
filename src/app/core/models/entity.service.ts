import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Entity } from './entity';
import { IdentityService } from './identity.service';

@Injectable()
export class EntityService<T extends Entity> extends IdentityService<T> {

	getCollection(): string {
		return 'entity';
	}

	getDetailByName(name: string): Observable<T[]> {
		if (!name.trim()) {
			// if not search term, return empty identity array.
			return of([]);
		}
		return this.http.get<T[]>(`${this.url}/?name=${name}`).pipe(
			tap(x => this.log(`found identities matching "${name}"`)),
			catchError(this.handleError<T[]>('searchTs', []))
		);
	}

}
