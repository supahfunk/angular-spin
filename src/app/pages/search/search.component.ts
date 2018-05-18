import { Component, OnInit } from '@angular/core';
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

	constructor(
		route: ActivatedRoute,
		public routeService: RouteService,
		public search: SearchService
	) {
		super(route);
	}

	ngOnInit() {
		/*
		this.params
			.takeUntil(this.unsubscribe)
			.subscribe(model => {
				if (model) {
					console.log('SearchComponent.model', model);
					this.model = model;
				}
			});
			*/
	}

}
