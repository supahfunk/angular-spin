import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../../../core/pages';
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
		private userService: UserService
	) {
		super(route);
	}

	ngOnInit() {

	}

	onSubmit(): void {
		this.submitted = true;
		this.userService.add(this.model)
			.takeUntil(this.unsubscribe)
			.subscribe(x => {
				console.log('created', x);
			});
	}
}
