import { Injectable } from '@angular/core';
import { EntityService } from '../core/models';
import { Category } from './category';

@Injectable()
export class CategoryService extends EntityService<Category> {

	getCollection(): string {
		return 'category';
	}

}
