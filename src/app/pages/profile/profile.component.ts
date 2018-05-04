import { Component, OnInit, Input } from '@angular/core';

import { PageComponent, TitleService } from '../../core/pages';

import { User, UserService } from '../../models';

@Component({
	selector: 'view-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends PageComponent implements OnInit {
	@Input() user: User;

	constructor(private userService: UserService) {
		super();
		this.attrClass = 'profile';
	}

	ngOnInit() {
		this.getUser();
	}

	getUser(): void {
		// const id = +this.route.snapshot.paramMap.get('id');
		this.userService.getDetailById(1).subscribe(user => this.user = user);
	}

	save(): void {
		this.userService.update(this.user).subscribe(() => {
			console.log('saved');
		});
	}
}
