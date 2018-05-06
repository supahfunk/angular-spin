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

	getFactory(): User {
		return new User();
	}

	isLoggedIn(): Observable<User> {
		return this.getDetailById(1) as Observable<User>;
	}

	tryLogin(password: string): Observable<User[]> {
		if (!password.trim()) {
			return of([]);
		}
		return this.http.get<User[]>(`api/users/?password=${password}`).pipe(
			tap(x => this.log(`found users matching "${password}"`)),
			catchError(this.handleError<User[]>('searchUsers', []))
		);
	}
}

