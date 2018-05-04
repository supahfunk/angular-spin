import { Entity } from '../models';

export class Page implements Entity {
	id: number;
	name: string;
	title?: string;
	description?: string;
	slug?: string;
	component?: string;
}
