import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import JSONFormatter from 'json-formatter-js';
import { isArray } from 'rxjs/util/isArray';
import { isObject } from 'rxjs/util/isObject';

@Component({
	selector: 'json-formatter',
	template: `<div #jsonFormatter></div>`,
	styleUrls: ['./json-formatter.component.scss']
})
export class JsonFormatterComponent implements OnChanges {
	@ViewChild(`jsonFormatter`) input: ElementRef;

	@Input() json: Array<any> | Object | any;

	constructor() { }

	ngOnChanges() {
		if (!isObject(this.json) && !isArray(this.json)) {
			return;
		}
		const formatter = new JSONFormatter(this.json);
		this.input.nativeElement.appendChild(formatter.render());
	}
}
