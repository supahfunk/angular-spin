import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { IdentityService } from './identity.service';
import { Entity } from './entity';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EntityService<T extends Entity> extends IdentityService<T> {

	getFactory(): Entity {
		return new Entity();
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
