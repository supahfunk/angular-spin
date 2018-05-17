
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { DisposableComponent } from '../../core/disposable';
import { SearchService } from '../../models';

@Component({
	selector: 'main-search',
	templateUrl: './main-search.component.html',
	styleUrls: ['./main-search.component.scss']
})

export class MainSearchComponent extends DisposableComponent implements AfterViewInit {

	active: ElementRef;
	destinationDirty: boolean = false;

	constructor(
		public search: SearchService
	) {
		super();
	}

	@ViewChild('query') query;
	query$;

	ngAfterViewInit() {
		this.query$ = fromEvent(this.query.nativeElement, 'keyup')
			.debounceTime(250)
			.map((x: any) => {
				return x.target.value;
			});
		this.query$
			.takeUntil(this.unsubscribe)
			.subscribe(x => {
				this.destinationDirty = true;
				this.search.onDestinationQuery(x);
			});
	}

	onSubmit() {
		this.active = null;
		this.search.onSearch();
	}
}
