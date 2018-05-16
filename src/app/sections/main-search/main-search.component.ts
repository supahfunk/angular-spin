import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'main-search',
	templateUrl: './main-search.component.html',
	styleUrls: ['./main-search.component.scss']
})

export class MainSearchComponent implements OnInit {

	it: any;
	minDate: Date;
	maxDate: Date;
	minYear: number;
	maxYear: number;
	active: string;
	startDate: string;
	model = {
		adults: 2,
		childs: 0,
		childrens: [],
	};

	ngOnInit() {
		this.it = {
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

		this.minDate = new Date();
		this.maxDate = new Date();
		this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
		this.minYear = this.minDate.getFullYear();
		this.maxYear = this.maxDate.getFullYear();
	}

	onChildsChanged() {
		while (this.model.childrens.length < this.model.childs) {
			this.model.childrens.push({ age: 0 });
		}
		this.model.childrens.length = Math.min(this.model.childs, this.model.childrens.length);
		console.log('onChildsChanged', this.model.childrens);
	}

}
