import { Injectable } from '@angular/core';
import { ControlBase, ControlCheckbox, ControlTextbox } from '../../../core/forms';

@Injectable()
export class SignInService {

	// TODO: get from a remote source of form metadata
	// TODO: make asynchronous
	getControls() {
		const controls: ControlBase<any>[] = [
			new ControlTextbox({
				key: 'email',
				label: 'signIn.email',
				placeholder: 'signIn.email',
				type: 'email',
				required: true,
				order: 1
			}),
			new ControlTextbox({
				key: 'password',
				label: 'signIn.password',
				placeholder: 'signIn.password',
				type: 'password',
				required: true,
				order: 2
			}),
			new ControlCheckbox({
				key: 'passwordReveal',
				label: 'signIn.passwordReveal',
				placeholder: 'signIn.passwordReveal',
				type: 'checkbox',
				order: 3
			}),
			new ControlCheckbox({
				key: 'rememberMe',
				label: 'signIn.rememberMe',
				placeholder: 'signIn.rememberMe',
				type: 'checkbox',
				order: 3
			}),
		];
		return controls.sort((a, b) => a.order - b.order);
	}

}
