import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PageComponent } from '../../core/pages';
import { Region, RegionService } from '../../models';

@Component({
	selector: 'view-region-detail',
	templateUrl: './region-detail.component.html',
	styleUrls: ['./region-detail.component.scss']
})
export class RegionDetailComponent extends PageComponent {

	@Input() region: Region;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private regionService: RegionService,
	) {
		super();
	}

	ngOnInit() {
		this.getRegion();
	}

	getRegion(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.regionService.getDetailById(id).subscribe(region => this.region = region);
	}

	goBack(): void {
		this.location.back();
	}

	save(): void {
		this.regionService.update(this.region).subscribe(() => this.goBack());
	}
}
