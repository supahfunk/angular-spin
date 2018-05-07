import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { RouteService } from './core';
import { RegionDetailComponent } from './pages';
import { NotFoundComponent } from './sections';

const routes: Routes = RouteService.setRoutes([
	{ path: 'region/:id', component: RegionDetailComponent },
	{ path: 'not-found', component: NotFoundComponent },
]);

/*
{ path: 'english/users/sometimes', component: UserComponent, useAsDefault: true },
  { path: ':lang/users/sometimes', component: UserCOmponent }
  */

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

