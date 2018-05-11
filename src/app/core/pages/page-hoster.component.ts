import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouteService } from '../routes';
import { PageResolver } from './page-resolver';
import { PageDirective } from './page.directive';

@Component({
	selector: 'page-hoster',
	template: `<ng-template #hostPage>Your View should load here..</ng-template>`,
})

export class PageHosterComponent implements OnInit {
	@ViewChild(PageDirective) hostPage: PageDirective;
	@ViewChild('hostPage', { read: ViewContainerRef }) hostPageRef;

	constructor(
		private route: ActivatedRoute,
		private routeService: RouteService,
		private componentFactoryResolver: ComponentFactoryResolver,
	) { }

	ngOnInit() {
		this.resolvePage();
	}

	resolvePage() {
		this.route.data.subscribe((data: { pageResolver: PageResolver }) => {
			const pageResolver = data.pageResolver;
			// console.log('resolvePage', pageResolver);
			// resolve component
			const componentFactory = this.componentFactoryResolver.resolveComponentFactory(pageResolver.component);
			// clear host directive
			this.hostPageRef.clear();
			// create component
			const componentRef = this.hostPageRef.createComponent(componentFactory);
			// componentRef.changeDetectorRef.detectChanges();
			const instance = componentRef.instance;
			instance.page = pageResolver.page;
			instance.params = this.route.params.concatMap(x => {
				return of(this.routeService.toData(x));
			});
			// console.log('pageResolver.page', pageResolver.page);
			// passing page data
			// (<PageComponent>componentRef.instance).page = pageResolver.page;
		});
	}
}
