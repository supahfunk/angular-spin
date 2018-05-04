
import { Component, Input, HostBinding, OnInit } from '@angular/core';

import { TitleService } from './title.service';

import { Page } from './page';

@Component({
	selector: 'app-page',
	template: `<h1>I'm a default view!</h1>`,
})

export class PageComponent {
	@Input() page: Page;
	@HostBinding('attr.class') attrClass = 'page';

	constructor() {
		// this.titleService.setTitle();
	}

}
