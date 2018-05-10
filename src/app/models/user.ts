import { Document } from '../core/models';

export class User implements Document {
	id: number;
	name: string;
	surname: string;
	email: string;
	password: string;
	slug?: string;
	privacyAccepted?: boolean;
	rememberMe?: boolean; // todo
	passwordReveal?: boolean; // todo
	emailConfirm?: string; // todo
}
