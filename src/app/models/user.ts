import { Entity } from '../core/models';

export class User implements Entity {
	id: number;
	name: string;
	password: string;
}
