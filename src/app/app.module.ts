import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MissingTranslationHandler, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { AppPages } from './app.pages';
import { AppRouting } from './app.routing';
import { AuthAttribute } from './core/attributes';
import { CustomMissingTranslationHandler, CustomTranslateLoader } from './core/labels/label.service';
import { Logger, LoggerComponent } from './core/logger';
import { MemoryService } from './core/memory';
import { PageDirective } from './core/pages';
import { RouteService } from './core/routes';
import { RegionService, UserService } from './models';
import { HomeComponent, ProfileComponent, RegionDetailComponent, RegionsComponent } from './pages';
import { FooterComponent, HeaderComponent, NotFoundComponent, RegionSearchComponent } from './sections';

@NgModule({
	imports: [
		BrowserModule, FormsModule, HttpClientModule,
		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		// and returns simulated server responses.
		// Remove it when a real server is ready to receive requests.
		HttpClientInMemoryWebApiModule.forRoot(MemoryService, {
			delay: 100, dataEncapsulation: false,
		}),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: CustomTranslateLoader,
				deps: [HttpClient, Logger]
			},
			missingTranslationHandler: { provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler },
		}),
		AppRouting,
		AppPages,
	],
	declarations: [
		AppComponent,
		HomeComponent, ProfileComponent, RegionDetailComponent, RegionsComponent,
		HeaderComponent, FooterComponent, RegionSearchComponent, NotFoundComponent,
		LoggerComponent, PageDirective,
	],
	providers: [
		UserService, RegionService,
		AuthAttribute,
		Logger, TranslateService,
		{ provide: RouteService, useClass: RouteService, deps: [TranslateService] },
	],
	entryComponents: [
		HomeComponent, ProfileComponent, RegionDetailComponent, RegionsComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
