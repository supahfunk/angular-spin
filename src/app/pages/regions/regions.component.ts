import { Component, OnInit, Input } from '@angular/core';

import { PageComponent, TitleService } from '../../core/pages';

import { Region, RegionService } from '../../models';

@Component({
	selector: 'view-regions',
	templateUrl: './regions.component.html',
	styleUrls: ['./regions.component.scss']
})

export class RegionsComponent extends PageComponent {

	regions: Region[];

	constructor(
		private regionService: RegionService
	) {
		super();
	}

	ngOnInit() {
		this.getRegions();
	}

	getRegions(): void {
		this.regionService.getList().subscribe(regions => this.regions = regions);
	}

	add(name: string): void {
		name = name.trim();
		if (!name) { return; }
		this.regionService.add({ name } as Region)
			.subscribe(region => {
				this.regions.push(region);
			});
	}

	delete(region: Region): void {
		this.regions = this.regions.filter(h => h !== region);
		this.regionService.delete(region).subscribe();
	}

}
