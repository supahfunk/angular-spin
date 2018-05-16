import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SegmentPipe } from './segment.pipe';

@Pipe({
	name: 'asset',
	// pure: false
})

@Injectable()
export class AssetPipe implements PipeTransform {

	constructor(
		private segment: SegmentPipe
	) { }

	transform(data: any[] | string): string {
		const segments = this.segment.transform(data);
		segments.unshift(environment.assets);
		return segments.join('/');
	}

}
