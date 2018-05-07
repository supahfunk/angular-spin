import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Logger } from '../logger';
import { Identity } from './identity';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IdentityService<T extends Identity> {
	protected collection: string;
	protected base = '/api/';
	protected url: string;

	constructor(protected http: HttpClient, protected logger: Logger) {
		// this.collection = type.constructor.name;
		this.url = this.getUrl();
	}

	getCollection(): string {
		return 'identity';
	}

	getUrl(): string {
		this.collection = this.getCollection();
		let url: string = `${this.base}${this.collection.toLowerCase()}`;
		console.log('IdentityService ', url);
		return url;
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
		this.logger.add(`${this.collection}Service: ${log}`);
	}
}

/*
import { ReflectiveInjector } from '@angular/core';
import { Headers, Http, HttpModule, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export  class BaseService {

  http:   Http;

  constructor() {
    let injector = ReflectiveInjector.resolveAndCreate([HttpModule, Http]);
    this.http = injector.get(Http);
  }

  get(url) {
    return this.http.get(url).map(res => res.json()).catch(this.handleError);
  }

  delete(url) {
    return this.http.delete(url).map(res => res.json()).catch(this.handleError);
  }

  extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  handleError(error: any) {
    const errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
*/
