import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, NotFoundComponent } from './pages';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'not-found', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRouting { }

