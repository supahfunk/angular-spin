import { Component, OnInit } from '@angular/core';

import { PageComponent } from '../../core/pages';

import { Region, RegionService } from '../../models';

@Component({
	selector: 'view-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent extends PageComponent {

	regions: Region[] = [];

	constructor(
		private regionService: RegionService
	) {
		super();
		this.attrClass = 'home';
	}

	ngOnInit() {
		this.getRegions();
	}

	getRegions(): void {
		this.regionService.getList().subscribe(regions => this.regions = regions.slice(1, 5));
	}
}
