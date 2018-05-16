import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeIt from '@angular/common/locales/it';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CalendarModule } from 'primeng/calendar';
import { GalleriaModule } from 'primeng/galleria';
import { SpinnerModule } from 'primeng/spinner';
import { AppComponent } from './app.component';
import { AppPages } from './app.pages';
import { AppRouting } from './app.routing';
import { AuthAttribute } from './core/guards';
import { CustomMissingTranslationHandler, LabelService } from './core/labels';
import { Logger, LoggerComponent } from './core/logger';
import { MemoryService } from './core/memory';
import { PageDirective } from './core/pages';
import { RouteService } from './core/routes';
import { ControlEditableComponent } from './forms';
import { CategoryService, PromotionService, RegionService, UserService } from './models';
import { HomeComponent, ProfileComponent, RegionDetailComponent, RegionsComponent, SignComponent, SignForgottenComponent, SignInComponent, SignUpComponent } from './pages';
import { CategoriesComponent, FooterComponent, HeaderComponent, HomeSearchComponent, MainSearchComponent, NotFoundComponent, PromotionsComponent, RegionSearchComponent, SvgComponent, ValuePropositionComponent } from './sections';

registerLocaleData(localeIt, 'it');

@NgModule({
	imports: [
		BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, CalendarModule, SpinnerModule, GalleriaModule, NoopAnimationsModule,
		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		// and returns simulated server responses.
		// Remove it when a real server is ready to receive requests.
		HttpClientInMemoryWebApiModule.forRoot(MemoryService, {
			delay: 0, dataEncapsulation: false,
		}),
		TranslateModule.forRoot({
			loader: { provide: TranslateLoader, useClass: LabelService, deps: [HttpClient, Logger] },
			missingTranslationHandler: { provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler },
		}),
		AppRouting,
		AppPages,
	],
	declarations: [
		AppComponent,
		HomeComponent, SignComponent, SignForgottenComponent, SignInComponent, SignUpComponent, ProfileComponent, RegionDetailComponent, RegionsComponent,
		HeaderComponent, FooterComponent, CategoriesComponent, SvgComponent, ValuePropositionComponent, PromotionsComponent, RegionSearchComponent, NotFoundComponent,
		ControlEditableComponent,
		LoggerComponent, PageDirective, MainSearchComponent, HomeSearchComponent
	],
	providers: [
		AuthAttribute,
		UserService, RegionService, PromotionService, CategoryService,
		Logger, TranslateService, RouteService,
		{ provide: LOCALE_ID, useValue: 'it' },
		// { provide: RouteService, useClass: RouteService, deps: [TranslateService, Location, Router] },
	],
	entryComponents: [HomeComponent, SignComponent, SignForgottenComponent, SignInComponent, SignUpComponent, ProfileComponent, RegionDetailComponent, RegionsComponent],
	bootstrap: [AppComponent]
})

export class AppModule { }
