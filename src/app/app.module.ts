// core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// in memory service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// routing
import { AppRouting } from './app.routing';
import { AppPages } from './app.pages';
import { CoreModule } from './core/core.module';

// root
import { RootComponent } from './root/root.component';

// core
import * as Core from './core';

// models
import * as Models from './models';

// layouts
// import * as Layouts from './layouts';

// pages
import * as Pages from './pages';

// sections
import * as Sections from './sections';

// shared
import * as Shared from './shared';

// attributes
import * as Attributes from './attributes';

@NgModule({
	imports: [
		BrowserModule, FormsModule, HttpClientModule,
		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		// and returns simulated server responses.
		// Remove it when a real server is ready to receive requests.
		HttpClientInMemoryWebApiModule.forRoot(Core.MemoryService, {
			dataEncapsulation: false, delay: 100,
		}),
		AppRouting, // page routing defined here
		AppPages,
	],
	declarations: [
		// Layouts.AuthLayout, Layouts.PublicLayout,
		Pages.HomeComponent, Pages.NotFoundComponent, Pages.ProfileComponent, Pages.RegionDetailComponent, Pages.RegionsComponent, RootComponent,
		Sections.HeaderComponent, Sections.FooterComponent,
		Shared.RegionSearchComponent,
		Core.LoggerComponent, Core.PageDirective,
	],
	providers: [
		Models.UserService, Models.RegionService,
		Attributes.AuthAttribute,
		Core.Logger, Core.TitleService,
	],
	entryComponents: [Pages.HomeComponent, Pages.ProfileComponent, Pages.RegionDetailComponent, Pages.RegionsComponent], // here are defined all the dynamic components
	bootstrap: [RootComponent]
})
export class AppModule { }
