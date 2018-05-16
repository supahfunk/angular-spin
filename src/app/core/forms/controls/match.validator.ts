import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

export function matchValidator(key: string, shouldMatchKey: string, group: FormGroup): ValidatorFn {
	return (control: FormControl) => {

		// const control = group.controls[key];
		const shouldMatchControl = group.controls[shouldMatchKey];

		console.log(control.touched, shouldMatchControl.touched);

		if (control.touched && shouldMatchControl.touched) {
			const match = control.value === shouldMatchControl.value;
			if (!match && control.valid && shouldMatchControl.valid) {
				control.setErrors({
					match: shouldMatchKey
				});
				return {
					match: shouldMatchKey + ' != ' + key
				};
			}
			if (match && control.hasError('match')) {
				control.setErrors(null);
			}
		}

		return null;
	};
}

/*
static isValidString(control: FormControl) {
	if (!control.value || typeof control.value !== 'string') {
		return {isNotValidString: true};
	}
	return null;
}

static isValidName(control: FormControl) {
	if (control.valid && control.value !== 'John Doe') {
		return {isNotValidName: true};
	}
	return null;
}
*/
