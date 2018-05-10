
import { Location } from '@angular/common';
import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'segment',
})

@Injectable()
export class SegmentPipe implements PipeTransform {

	constructor(
		private location: Location
	) { }

	transform(segments: any[] | string): string[] {
		segments = segments != null ? (Array.isArray(segments) ? segments : segments.split('/')) : [];
		let path: string = segments.join('/');
		path = this.location.normalize(path);
		if (path.indexOf('/') !== 0) {
			path = `/${path}`;
		}
		// console.log('SegmentPipe', path);
		return path.split('/');
	}
}
