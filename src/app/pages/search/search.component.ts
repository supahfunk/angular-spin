import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../../core/pages';
import { RouteService } from '../../core/routes';
import { SearchService } from '../../models';

@Component({
	selector: 'page-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})

export class SearchComponent extends PageComponent implements OnInit {

	active: ElementRef;

	constructor(
		route: ActivatedRoute,
		public routeService: RouteService,
		public search: SearchService
	) {
		super(route);
		this.routeService.params
			.takeUntil(this.unsubscribe)
			.subscribe(model => {
				console.log('SearchComponent.constructor', model);
			});
	}

	ngOnInit() {
		this.params
			.takeUntil(this.unsubscribe)
			.subscribe(model => {
				console.log('SearchComponent.onInit', model);
			});
	}

}
