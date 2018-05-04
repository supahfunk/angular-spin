import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import * as Pages from './pages';

@NgModule({
	imports: [CoreModule.forRoot(Pages)],
	exports: [CoreModule]
})

export class AppPages { }

