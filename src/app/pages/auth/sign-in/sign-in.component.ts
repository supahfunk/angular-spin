import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../../../core/pages';
import { User, UserService } from '../../../models';

@Component({
	selector: 'page-sign-in',
	templateUrl: './sign-in.component.html',
	styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent extends PageComponent implements OnInit {

	model: User = new User();
	submitted: boolean = false;

	constructor(
		route: ActivatedRoute,
		private userService: UserService
	) {
		super(route);
	}

	ngOnInit() {

	}

	onSubmit(): void {
		this.submitted = true;
		this.userService.tryLogin(this.model)
			.takeUntil(this.unsubscribe)
			.subscribe(x => {
				console.log('logged', x);
			});
	}
}
