import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacebookService, FacebookUser, GoogleService, GoogleUser } from '../../../core';
import { PageComponent } from '../../../core/pages';
import { User, UserService } from '../../../models';

@Component({
	selector: 'page-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent extends PageComponent implements OnInit {

	facebook: FacebookUser;
	google: GoogleUser;

	model: User = new User();
	submitted: boolean = false;

	constructor(
		route: ActivatedRoute,
		private facebookService: FacebookService,
		private googleService: GoogleService,
		private userService: UserService
	) {
		super(route);
	}

	ngOnInit() {
		this.params.subscribe(params => {
			if (params) {
				console.log('SignInComponent.params', params);
				if (params.facebook) {
					this.facebook = params.facebook as FacebookUser;
					this.model.name = this.facebook.first_name;
					this.model.surname = this.facebook.last_name;
					this.model.email = this.facebook.email;
				}
				if (params.google) {
					this.google = params.google as GoogleUser;
					this.model.name = this.google.firstName;
					this.model.surname = this.google.lastName;
					this.model.email = this.google.email;
				}
			}
		});
	}

	onSubmit(): void {
		this.submitted = true;
		this.userService.tryLogin(this.model)
			.takeUntil(this.unsubscribe)
			.subscribe(x => {
				console.log('logged', x);
			});
	}

	onFacebookLogout(): void {
		this.facebookService.logout().subscribe(x => {
			console.log('SignUpComponent.onFacebookLogout', x);
			this.facebook = null;
		});
	}

	onGoogleLogout(): void {
		this.googleService.logout().subscribe(x => {
			console.log('SignUpComponent.onGoogleLogout', x);
			this.google = null;
		});
	}
}
