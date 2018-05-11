import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageComponent } from '../../../core/pages';
import { FacebookService, GoogleService } from '../../../core/plugins';
import { RouteService } from '../../../core/routes';
import { User, UserService } from '../../../models';

@Component({
	selector: 'page-sign',
	templateUrl: './sign.component.html',
	styleUrls: ['./sign.component.scss']
})

export class SignComponent extends PageComponent implements OnInit {

	model: User = new User();
	submitted: boolean = false;

	constructor(
		route: ActivatedRoute,
		private routeService: RouteService,
		private router: Router,
		private facebookService: FacebookService,
		private googleService: GoogleService,
		private userService: UserService
	) {
		super(route);
	}

	ngOnInit() {
		this.facebookService.status().subscribe(x => {
			console.log('SignComponent.facebookService.status', x);
		});
		this.googleService.auth2Instance().subscribe(x => {
			console.log('SignComponent.googleService.auth2Instance', x);
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

	onFacebook(): void {
		this.facebookService.getMe().subscribe(me => {
			const segments = this.routeService.toRoute(['/registrati']);
			segments.push(this.routeService.toParams({
				facebook: me
			}));
			// console.log('SignComponent.facebookService.getMe', me, segments);
			this.router.navigate(segments);
		});
	}

	onGoogle(): void {
		this.googleService.getMe().subscribe(me => {
			const segments = this.routeService.toRoute(['/registrati']);
			segments.push(this.routeService.toParams({
				google: me
			}));
			// console.log('SignComponent.googleService.getMe', me, segments);
			this.router.navigate(segments);
		});
	}
}
