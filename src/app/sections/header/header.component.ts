import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Label } from '../../core/labels';
import { RouteService } from '../../core/routes';

@Component({
	selector: 'section-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	public dropdown: boolean;
	public languages: Label[];
	public currentLanguage: Label;

	constructor(
		private route: ActivatedRoute,
		private translateService: TranslateService,
		private router: Router,
		private location: Location,
		public routeService: RouteService
	) {
		// console.log('HeaderComponent', this.translateService, this.routeService);
	}

	ngOnInit() {
		// console.log('HeaderComponent', this.translateService, this.translateService.currentLang);
		this.languages = this.translateService.store.langs.map((x: string, i: number) => {
			return {
				id: i + 1,
				name: x,
				lang: x,
			}
		})
		this.currentLanguage = {
			id: 1,
			name: this.translateService.currentLang,
			lang: this.translateService.currentLang,
		}
		this.translateService.onLangChange.subscribe((e: LangChangeEvent) => {
			this.currentLanguage = this.languages.find(x => x.lang === this.translateService.currentLang);
			console.log('HeaderComponent.onLangChange', this.currentLanguage);
		});
	}

	setLanguage(language: Label) {
		// console.log('setLanguage', language);
		this.routeService.setLanguage(language.lang, true);
		/*
		this.currentLanguage = language;
		this.translateService.use(language.lang);
		this.router.navigate(this.routeService.getLinkSegments(''));
		*/
	}

}
