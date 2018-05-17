import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageComponent } from '../../core/pages';
import { RouteService } from '../../core/routes';

@Component({
	selector: 'page-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})

export class SearchComponent extends PageComponent implements OnInit {

	constructor(
		route: ActivatedRoute,
		public routeService: RouteService
	) {
		super(route);
	}

	ngOnInit() {
		this.params
			.takeUntil(this.unsubscribe)
			.subscribe(params => {
				if (params) {
					console.log('SearchComponent.params', params);
				}
			});
	}

}
