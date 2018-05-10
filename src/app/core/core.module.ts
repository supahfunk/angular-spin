import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MissingTranslationHandler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AuthService } from './auth';
import { CoreRouting } from './core.routing';
import { DisposableComponent } from './disposable';
import { MatchValidator } from './forms';
import { CustomMissingTranslationHandler, LabelService } from './labels';
import { Logger } from './logger';
import { OnceService } from './once';
import { PageComponent, PageHosterComponent, PageService, Pages } from './pages';
import { FacebookService } from './plugins';
import { AssetPipe, PublicPipe, RoutePipe, SegmentPipe, SlugPipe } from './routes';

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
		AssetPipe, PublicPipe, RoutePipe, SegmentPipe, SlugPipe, MatchValidator,
	],
	declarations: [
		PageHosterComponent, PageComponent, DisposableComponent,
		AssetPipe, PublicPipe, RoutePipe, SegmentPipe, SlugPipe, MatchValidator,
	],
	providers: [
		PageService, AssetPipe, PublicPipe, RoutePipe, SegmentPipe, Logger, AuthService, FacebookService, OnceService,
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
