import { Inject, Injectable, Injector, PLATFORM_ID } from '@angular/core';
import { OnceService } from '../once/once.service';

@Injectable()
export class AuthService {

	private paths: string[] = [];

	constructor(
		@Inject(PLATFORM_ID) private platformId: string,
		private injector: Injector,
		private onceService: OnceService,
	) { }

}
