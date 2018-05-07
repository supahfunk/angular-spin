import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../../models';

@Injectable()
export class AuthAttribute implements CanActivate {

	constructor(
		private router: Router,
		private userService: UserService
	) { }

	canActivate() {
		if (this.userService.isLoggedIn()) {
			return true;
		} else {
			this.router.navigate(['/home']);
			return false;
		}
	}

}
