import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppPages } from './app.pages';
import { AppRouting } from './app.routing';
import { AuthAttribute } from './attributes';
import { Logger, LoggerComponent } from './core/logger';
import { MemoryService } from './core/memory';
import { PageDirective } from './core/pages';
import { RegionService, UserService } from './models';
import { HomeComponent, NotFoundComponent, ProfileComponent, RegionDetailComponent, RegionsComponent } from './pages';
import { RootComponent } from './root/root.component';
import { FooterComponent, HeaderComponent } from './sections';
import { RegionSearchComponent } from './shared';

@NgModule({
	imports: [
		BrowserModule, FormsModule, HttpClientModule,
		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		// and returns simulated server responses.
		// Remove it when a real server is ready to receive requests.
		HttpClientInMemoryWebApiModule.forRoot(MemoryService, {
			delay: 100, dataEncapsulation: false,
		}),
		AppRouting,
		AppPages,
	],
	declarations: [
		// Layouts.AuthLayout, Layouts.PublicLayout,
		HomeComponent, NotFoundComponent, ProfileComponent, RegionDetailComponent, RegionsComponent, RootComponent,
		HeaderComponent, FooterComponent,
		RegionSearchComponent,
		LoggerComponent, PageDirective,
	],
	providers: [
		UserService, RegionService,
		AuthAttribute,
		Logger, // , Core.TitleService,
	],
	entryComponents: [HomeComponent, ProfileComponent, RegionDetailComponent, RegionsComponent],
	bootstrap: [RootComponent]
})
export class AppModule { }
