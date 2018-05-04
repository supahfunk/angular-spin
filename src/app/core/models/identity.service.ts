import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Logger } from '../logger';
import { Identity } from './identity';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IdentityService<T extends Identity> {

	public type: any = null;

	protected base = '/api/';
	protected url: string = null;

	constructor(protected http: HttpClient, protected logger: Logger) {
		const type: any = this.getFactory();
		console.log('IdentityService type', type.constructor.name);
		this.url = `${this.base}${type.constructor.name.toLowerCase()}`;
	}

	getFactory(): Identity {
		return new Identity();
	}

	getList(): Observable<T[]> {
		return this.http.get<T[]>(this.url).pipe(
			tap(x => this.log(`getList`)),
			catchError(this.handleError('getList', []))
		);
	}

	getDetailByIdNo404<Data>(id: number): Observable<T> {
		return this.http.get<T[]>(`${this.url}/?id=${id}`).pipe(
			map((identities: T[]) => identities[0]), // returns a {0|1} element array
			tap(x => {
				this.log(`getDetailByIdNo404 ${x ? `found` : `not found`} #${id}`);
			}),
			catchError(this.handleError<T>(`getDetailByIdNo404 #${id}`))
		);
	}

	getDetailById(id: number): Observable<T> {
		return this.http.get<T>(`${this.url}/${id}`).pipe(
			tap(x => this.log(`getDetailById #${id}`)),
			catchError(this.handleError<T>(`getDetailById #${id}`))
		);
	}

	// crud

	add(identity: T): Observable<T> {
		return this.http.post<T>(this.url, identity, httpOptions).pipe(
			tap((identity: T) => this.log(`added #${identity.id}`)),
			catchError(this.handleError<T>('add'))
		);
	}

	delete(identity: T | number): Observable<T> {
		const id = typeof identity === 'number' ? identity : identity.id;
		return this.http.delete<T>(`${this.url}/${id}`, httpOptions).pipe(
			tap(x => this.log(`deleted #${id}`)),
			catchError(this.handleError<T>('delete'))
		);
	}

	update(identity: T): Observable<any> {
		return this.http.put(this.url, identity, httpOptions).pipe(
			tap(x => this.log(`updated #${identity.id}`)),
			catchError(this.handleError<any>('update'))
		);
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	protected handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead
			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);
			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

	protected log(log: string) {
		this.logger.add('IdentityService: ' + log);
	}
}
