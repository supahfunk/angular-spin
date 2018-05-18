
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import { DisposableComponent } from '../../core/disposable';
import { SearchService } from '../../models';

@Component({
	selector: 'main-search',
	templateUrl: './main-search.component.html',
	styleUrls: ['./main-search.component.scss']
})

export class MainSearchComponent extends DisposableComponent implements OnInit, AfterViewInit {

	active: ElementRef;
	destinationDirty: boolean = false;

	constructor(
		private changeDetector: ChangeDetectorRef,
		public search: SearchService
	) {
		super();
	}

	@ViewChild('query') query;
	query$;

	ngOnInit() {
		// console.log('MainSearchComponent.OnInit');
	}

	ngAfterViewInit() {
		this.addListeners();
	}

	onDestinationSet(item: any) {
		this.search.onDestinationSet(item);
		this.changeDetector.detectChanges();
	}

	onSubmit() {
		this.active = null;
		this.search.onSearch();
	}

	addListeners() {
		// input query keyup listener
		this.query$ = fromEvent(this.query.nativeElement, 'keyup')
			.debounceTime(250)
			.map((event: any) => {
				return event.target.value; // input value
			})
			.distinctUntilChanged();
		this.query$
			.takeUntil(this.unsubscribe)
			.subscribe(query => {
				if (!query && !query.trim()) {
					return;
				}
				this.destinationDirty = true;
				this.search.onDestinationQuery(query);
			});
	}
}
