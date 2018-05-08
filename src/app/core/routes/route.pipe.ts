import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { SegmentPipe } from '../assets/segment.pipe';
import { RouteService } from './route.service';

@Pipe({
	name: 'route',
	pure: false
})

@Injectable()
export class RoutePipe implements PipeTransform {

	constructor(
		private segment: SegmentPipe,
		private translateService: TranslateService,
		private routeService: RouteService,
	) { }

	transform(data: any[] | string): string[] {
		const segments = this.segment.transform(data);
		if (environment.useMarket) {
			const market: string = this.routeService.currentMarket;
			segments.unshift(market);
		}
		if (environment.useLang) {
			const lang: string = this.translateService.currentLang;
			segments.unshift(lang);
		}
		segments.unshift('/');
		// console.log('RouteService.getLinkSegments', data.join('/'), segments.join('/'));
		return segments;
	}

}
