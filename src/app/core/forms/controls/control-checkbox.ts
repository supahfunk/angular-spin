import { ControlBase } from './control-base';

export class ControlCheckbox extends ControlBase<string> {
	controlType = 'checkbox';
	type: string;

	constructor(
		options: {} = {}
	) {
		super(options);
		this.type = options['type'] || '';
	}
}
