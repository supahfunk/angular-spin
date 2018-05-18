
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { DisposableComponent } from '../../core/disposable';
import { RouteService } from '../../core/routes';
import { Destination, DestinationService } from '../../models';

export class Duration {
	id: number;
	name: string;
}

const durations: Duration[] = [
	{ id: 1, name: 'Qualsiasi durata' },
	{ id: 2, name: '1-3 notti' },
	{ id: 3, name: '4-6 notti' },
	{ id: 4, name: '7 notti' },
	{ id: 5, name: '8-13 notti' },
	{ id: 6, name: '14 notti o più' }
];

export class MainSearch {
	query?: string;
	destination?: Destination;
	startDate?: Date;
	flexibleDates: boolean = false;
	duration: Duration = durations[0];
	adults: number = 2;
	childs: number = 0;
	childrens: any[] = [];
}

export class CalendarOption {
	it: any = {
		firstDayOfWeek: 1,
		dayNames: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
		dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Giov', 'Ven', 'Sab'],
		dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
		monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
		dateFormat: 'dd/mm/yy',
		monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
		today: 'Oggi',
		clear: 'Resetta'
	};
	minDate: Date;
	maxDate: Date;
	minYear: number;
	maxYear: number;
	active: string;

	constructor() {
		this.minDate = new Date();
		this.maxDate = new Date();
		this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
		this.minYear = this.minDate.getFullYear();
		this.maxYear = this.maxDate.getFullYear();
	}
}

@Component({
	selector: 'main-search',
	templateUrl: './main-search.component.html',
	styleUrls: ['./main-search.component.scss']
})

export class MainSearchComponent extends DisposableComponent implements AfterViewInit {

	model: MainSearch = new MainSearch();

	calendar: CalendarOption = new CalendarOption();

	destinations: Destination[];
	destinationDirty: boolean = false;

	durations: Duration[] = durations;

	ages: number[] = new Array(18).fill(0).map((x, i) => i); // 0 - 17

	active: ElementRef;

	constructor(
		private router: Router,
		private routeService: RouteService,
		private destinationService: DestinationService,
		private renderer: Renderer2,
		private elementRef: ElementRef
	) {
		super();

	}



	@ViewChild('query') query;
	query$;

	@ViewChild('searchLocation') searchLocation;

	ngAfterViewInit() {
		this.query$ = fromEvent(this.query.nativeElement, 'keyup')
			.debounceTime(250)
			.map((x: any) => {
				return x.target.value;
			});
		this.query$
			.takeUntil(this.unsubscribe)
			.subscribe(x => this.onDestinationKeyUp(x));

		this.renderer.listen(this.searchLocation.nativeElement, 'click', () => { console.log('cliccato'); });
	}

	// DESTINATIONS
	onDestinationKeyUp(query: string) {
		this.model.query = query;
		this.destinationDirty = true;
		this.destinationService.autocomplete(query)
			.takeUntil(this.unsubscribe)
			.debounceTime(200)
			.subscribe(x => {
				this.destinations = x;
			});
	}

	onSetDestination(destination: Destination) {
		this.model.destination = destination;
	}

	// CHILDRENS
	onChildsChanged() {
		while (this.model.childrens.length < this.model.childs) {
			this.model.childrens.push({ age: 0 });
		}
		this.model.childrens.length = Math.min(this.model.childs, this.model.childrens.length);
	}

	// CERCA
	onSubmit() {
		this.active = null;
		console.log(this.model);
		const segments = this.routeService.toRoute(['/search']);
		segments.push(this.routeService.toParams(this.model));
		this.router.navigate(segments);
	}
}
