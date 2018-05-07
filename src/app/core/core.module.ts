import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CoreRouting } from './core.routing';
import { CustomMissingTranslationHandler, LabelService } from './labels';
import { Logger } from './logger';
import { PageComponent, PageConfig, PageHosterComponent, PageService } from './pages';

// import { IdentityService, EntityService } from './models';
// import { Logger, LoggerComponent } from './logger';
// import { MemoryService } from './memory';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TranslateModule.forChild({
			loader: { provide: TranslateLoader, useClass: LabelService, deps: [HttpClient, Logger] },
			missingTranslationHandler: { provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler },
		}),
		CoreRouting,
	],
	exports: [
		CommonModule,
		TranslateModule,
		CoreRouting,
	],
	declarations: [
		PageHosterComponent, PageComponent,
	],
	providers: [
		PageService, LabelService, // IdentityService, EntityService, Logger, MemoryService,
	],
})

export class CoreModule {

	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import it in the AppModule only');
		}
	}

	public static forRoot(config: any): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				{ provide: PageConfig, useValue: config ? config : {} }
			]
		};
	}

}
