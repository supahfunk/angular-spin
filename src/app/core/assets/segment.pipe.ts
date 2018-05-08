import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'segment',
})

@Injectable()
export class SegmentPipe implements PipeTransform {
	transform(segments: any[] | string): string[] {
		segments = segments != null ? (Array.isArray(segments) ? segments : segments.split('/')) : [];
		if (segments[0] === '') {
			segments.shift();
		}
		return segments.slice();
	}
}
