
import { Component, HostBinding, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DisposableComponent } from '../disposable';
import { Page } from './page';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-page',
	template: `<h1>I'm a default view!</h1>`,
})

export class PageComponent extends DisposableComponent {
	@Input() page: Page;
	@Input() params: Observable<Params>;
	@HostBinding('attr.class') attrClass = 'page';

	constructor(
		protected route: ActivatedRoute
	) {
		super();
		/*
		this.getPage();
		this.getQuery();
		*/
		// this.titleService.setTitle();
	}

	/*
	getPage(): void {
		if (this.route) {
			this.route.data.pipe(
				takeUntil(this.unsubscribe)) // before any subscribe
				.subscribe((data: { pageResolver: PageResolver }) => {
					this.page = (data.pageResolver ? data.pageResolver.page : null);
				});
		}
	}
	*/

	getId(): number {
		return +this.route.snapshot.paramMap.get('id') || (this.page ? this.page.id : 0);
	}
}
