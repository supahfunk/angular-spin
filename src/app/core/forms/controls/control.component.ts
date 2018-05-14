import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ControlBase } from './control-base';

@Component({
	selector: 'app-control',
	templateUrl: './control.component.html'
})
export class ControlComponent {
	@Input() control: ControlBase<any>;
	@Input() form: FormGroup;

	get controlRef(): AbstractControl {
		// console.log('controlRef', this.control.key, this.form.controls);
		return this.form.controls[this.control.key];
	}

	get isValid() { return this.controlRef.valid; }

}
