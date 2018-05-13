import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { EntityService } from '../core/models';
import { FacebookUser, GoogleUser } from '../core/plugins';
import { User, UserAuth, UserSignForgotten } from './user';

@Injectable()
export class UserService extends EntityService<User> {

	getCollection(): string {
		return 'user';
	}

	isLoggedIn(): Observable<User> {
		return this.getDetailById(1) as Observable<User>;
	}

	tryLogin(user: UserAuth): Observable<UserAuth[]> {
		if (!user.password.trim()) {
			return of([]);
		}
		return this.http.get<UserAuth[]>(`${this.url}?email=${user.email}&password=${user.password}`);
		/*.pipe(
			tap(x => this.log(`tryLogin "${user.email}"`)),
			catchError(this.handleError<UserAuth[]>('tryLogin', []))
		);*/
	}

	signForgotten(userSignForgotten: UserSignForgotten): Observable<any> {
		if (!userSignForgotten.email.trim()) {
			return of([]);
		}
		return this.http.post<any>(`${this.url}/forgotten`, userSignForgotten, this.httpOptions);
		/*.pipe(
			tap(x => this.log(`tryLogin "${user.email}"`)),
			catchError(this.handleError<UserAuth[]>('tryLogin', []))
		);*/
	}

	tryFacebook(user: FacebookUser): Observable<UserAuth[]> {
		if (!user.facebookToken.trim()) {
			return of([]);
		}
		return this.http.get<UserAuth[]>(`${this.url}?email=${user.email}&facebookToken=${user.facebookToken}`);
		/*.pipe(
			tap(x => this.log(`tryFacebook "${user.email}"`)),
			catchError(this.handleError<UserAuth[]>('tryFacebook', []))
		);*/
	}

	tryGoogle(user: GoogleUser): Observable<UserAuth[]> {
		if (!user.googleToken.trim()) {
			return of([]);
		}
		return this.http.get<UserAuth[]>(`${this.url}?email=${user.email}&googleToken=${user.googleToken}`).pipe(
			tap(x => this.log(`tryGoogle "${user.email}"`)),
			catchError(this.handleError<UserAuth[]>('tryGoogle', []))
		);
	}

}

