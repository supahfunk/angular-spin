import { Type } from '@angular/core';

import { PageComponent } from './page.component';
import { Page } from './page';
import { PageConfig } from './page.config';

export class PageResolver {
	public component: Type<PageComponent> = PageComponent;

	constructor(public page: Page, config: PageConfig) {
		console.log('config', config);
		if (config && page.component) {
			this.component = config.pages[page.component];
		}
		console.log(page.component, this.component);
	}
}
