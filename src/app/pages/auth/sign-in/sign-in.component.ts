import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacebookService, FacebookUser, GoogleService, GoogleUser } from '../../../core';
import { AuthService, AuthToken } from '../../../core/auth';
import { PageComponent } from '../../../core/pages';
import { RouteService } from '../../../core/routes';
import { UserAuth, UserService, UserSignIn } from '../../../models';

@Component({
	selector: 'page-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent extends PageComponent implements OnInit {

	model: UserSignIn = new UserSignIn();
	facebook: FacebookUser;
	google: GoogleUser;
	error: any;
	submitted: boolean = false;

	constructor(
		route: ActivatedRoute,
		private routeService: RouteService,
		private router: Router,
		private authService: AuthService,
		private facebookService: FacebookService,
		private googleService: GoogleService,
		private userService: UserService
	) {
		super(route);
	}

	ngOnInit() {
		this.params
			.takeUntil(this.unsubscribe)
			.subscribe(params => {
				if (params) {
					console.log('SignInComponent.params', params);
					if (params.facebook) {
						this.facebook = params.facebook as FacebookUser;
						this.model.firstName = this.facebook.first_name;
						this.model.lastName = this.facebook.last_name;
						this.model.email = this.facebook.email;
					}
					if (params.google) {
						this.google = params.google as GoogleUser;
						this.model.firstName = this.google.firstName;
						this.model.lastName = this.google.lastName;
						this.model.email = this.google.email;
					}
				}
			});
	}

	onSubmit(): void {
		this.submitted = true;
		this.userService.tryLogin(this.model)
			.takeUntil(this.unsubscribe)
			.subscribe(
				users => {
					const user = users[0];
					this.onAuth(user);
					console.log('onSubmit.success', user);
				}, error => {
					this.error = error;
					this.submitted = false;
					console.log('onSubmit.error', this.error);
				});
	}

	onAuth(user: UserAuth) {
		const authToken = new AuthToken(user.accessToken);
		this.authService.setToken(authToken);
		const segments = this.routeService.toRoute(['/profile']);
		this.router.navigate(segments);
	}

	onFacebookLogout(): void {
		this.facebookService.logout()
			.takeUntil(this.unsubscribe)
			.subscribe(x => {
				console.log('SignUpComponent.onFacebookLogout', x);
				this.facebook = null;
			});
	}

	onGoogleLogout(): void {
		this.googleService.logout()
			.takeUntil(this.unsubscribe)
			.subscribe(x => {
				console.log('SignUpComponent.onGoogleLogout', x);
				this.google = null;
			});
	}
}
