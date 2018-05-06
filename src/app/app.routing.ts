import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { NotFoundComponent, RegionDetailComponent } from './pages';

const routes: Routes = [
	{ path: 'region/:id', component: RegionDetailComponent },
	{ path: 'not-found', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(
		routes,
		{
			enableTracing: environment.enableTracing,
			useHash: environment.useHash,
		}
	)],
	exports: [RouterModule]
})

export class AppRouting { }

