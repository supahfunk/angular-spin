import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AssetPipe, PublicPipe, SegmentPipe } from './assets';
import { CoreRouting } from './core.routing';
import { CustomMissingTranslationHandler, LabelService } from './labels';
import { Logger } from './logger';
import { PageComponent, PageHosterComponent, PageService, Pages } from './pages';
import { RoutePipe } from './routes';

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
		AssetPipe, PublicPipe, RoutePipe, SegmentPipe,
	],
	declarations: [
		PageHosterComponent, PageComponent,
		AssetPipe, PublicPipe, RoutePipe, SegmentPipe,
	],
	providers: [
		PageService, SegmentPipe,
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
				{ provide: Pages, useValue: config ? config : {} }
			]
		};
	}
}
