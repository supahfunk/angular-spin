import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacebookService, FacebookUser, GoogleService, GoogleUser } from '../../../core';
import { PageComponent } from '../../../core/pages';
import { User, UserService } from '../../../models';

@Component({
	selector: 'page-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent extends PageComponent implements OnInit {

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
				console.log('SignUpComponent.params', params);
				if (params.facebook) {
					this.facebook = params.facebook as FacebookUser;
					this.model.name = this.facebook.first_name;
					this.model.surname = this.facebook.last_name;
					this.model.email = this.facebook.email;
					this.model.emailConfirm = this.facebook.email;
				}
				if (params.google) {
					this.google = params.google as GoogleUser;
					this.model.name = this.google.firstName;
					this.model.surname = this.google.lastName;
					this.model.email = this.google.email;
					this.model.emailConfirm = this.facebook.email;
				}
			}
		});
	}

	onSubmit(): void {
		this.submitted = true;
		this.userService.add(this.model)
			.takeUntil(this.unsubscribe)
			.subscribe(x => {
				console.log('created', x);
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
