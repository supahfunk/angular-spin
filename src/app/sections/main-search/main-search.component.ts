import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
		private router: Router,
		private renderer: Renderer2,
		private elementRef: ElementRef,
		private changeDetector: ChangeDetectorRef,
		public search: SearchService
	) {
		super();

	}

	@ViewChild('query') query;
	query$;

	@ViewChild('searchLocation') searchLocation;

	ngAfterViewInit() {
		this.addListeners();

		this.renderer.listen(this.searchLocation.nativeElement, 'click', () => { console.log('cliccato'); });

	}

	ngOnInit() {
		// console.log('MainSearchComponent.OnInit');

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
