import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Logger } from './core/logger';

@Component({
	selector: 'app-component',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {

	constructor(
		private logger: Logger,
		private translateService: TranslateService
	) {
		this.initLang();
	}

	initLang(): Observable<any> {
		console.log(this.translateService);
		this.translateService.addLangs(['it', 'en']);
		this.translateService.setDefaultLang('it');
		this.translateService.onLangChange.subscribe((e: LangChangeEvent) => {
			console.log('onLangChange', e.translations);

		});
		return this.translateService.use('it');
		/*
		if (isPlatformServer(this.platformId)) {
			let acceptLanguage: string = this.req.headers['accept-language'];

			if (Comparator.isStringEmpty(acceptLanguage)) {
				return this.translateService.use('en');
			} else {
				let languages: string[] = acceptLanguage.match(/[a-zA-Z\-]{2,10}/g) || [];

				if (languages.length > 0) {
				let userLang: string = languages[0].split('-')[0];
				userLang = /(de|en|fr|it)/gi.test(userLang) ? userLang : 'en';

				return this.translateService.use(userLang);
				} else {
				return this.translateService.use('en');
				}
		}
			} else {
			const lang: string = this.translateService.getBrowserLang();
			const match = (lang || '').match(/(en|de|fr|it)/);

			return this.translateService.use(match ? match[0] : 'en');
			}
		}
		*/
	}

	linkTo(commands: any[] | string): string[] {
		if (commands != null) {
			commands = Array.isArray(commands) ? commands : [commands];
		} else {
			commands = [];
		}
		if (environment.useMarket) {
			const market: string = 'IT';
			commands.unshift(market);
		}
		if (environment.useLang) {
			const lang: string = this.translateService.currentLang;
			commands.unshift(lang);
		}
		return commands;
	}

}


