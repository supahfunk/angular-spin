import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageResolver } from './page-resolver';
import { PageDirective } from './page.directive';
import { PageComponent } from './page.component';

@Component({
	selector: 'page-hoster',
	template: `<ng-template #hostPage>Your View should load here..</ng-template>`,
})

export class PageHosterComponent {
	@ViewChild(PageDirective) hostPage: PageDirective;
	@ViewChild('hostPage', { read: ViewContainerRef }) hostPageRef;

	constructor(
		private route: ActivatedRoute,
		private componentFactoryResolver: ComponentFactoryResolver,
	) { }

	ngOnInit() {
		this.resolvePage();
	}

	resolvePage() {
		this.route.data.subscribe((data: { pageResolver: PageResolver }) => {
			let pageResolver = data.pageResolver;
			// resolve component
			let componentFactory = this.componentFactoryResolver.resolveComponentFactory(pageResolver.component);
			// clear host directive
			this.hostPageRef.clear();
			// create component
			let componentRef = this.hostPageRef.createComponent(componentFactory);
			componentRef.changeDetectorRef.detectChanges();
			// passing page data
			(<PageComponent>componentRef.instance).page = pageResolver.page;
		});
	}
}
