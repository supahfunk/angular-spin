import { Document } from '../core/models';

export class User implements Document {
	id: number;
	name: string;
	password: string;
	slug?: string;
}
