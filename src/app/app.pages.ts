import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { PageConfig } from './core/pages';
import { HomeComponent, ProfileComponent, RegionDetailComponent, RegionsComponent } from './pages';

const pages: PageConfig = {
	HomeComponent: HomeComponent,
	ProfileComponent: ProfileComponent,
	RegionDetailComponent: RegionDetailComponent,
	RegionsComponent: RegionsComponent,
}

@NgModule({
	imports: [CoreModule.forRoot(pages)],
	exports: [CoreModule]
})

export class AppPages { }

