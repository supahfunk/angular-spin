import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { EntityService } from '../core/models';
import { User } from './user';

@Injectable()
export class UserService extends EntityService<User> {

	getCollection(): string {
		return 'user';
	}

	isLoggedIn(): Observable<User> {
		return this.getDetailById(1) as Observable<User>;
	}

	tryLogin(user: User): Observable<User[]> {
		if (!user.password.trim()) {
			return of([]);
		}
		return this.http.get<User[]>(`${this.url}?email=${user.email}&password=${user.password}`).pipe(
			tap(x => this.log(`found users matching "${user.password}"`)),
			catchError(this.handleError<User[]>('searchUsers', []))
		);
	}
}

