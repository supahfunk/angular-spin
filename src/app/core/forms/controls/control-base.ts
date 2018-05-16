export class ControlBaseOptions<T> {
	value?: T;
	key?: string;
	label?: string;
	placeholder?: string;
	// order
	order?: number;
	schema?: string;
	type?: string;
	// validators
	min?: number;
	max?: number;
	required?: boolean;
	requiredTrue?: boolean;
	email?: boolean;
	minLength?: number;
	maxLength?: number;
	pattern?: string | RegExp;
	match?: string;
}

export class ControlBase<T> {

	static uid: number = 0;

	value: T;
	key: string;
	//
	label: string;
	placeholder: string;
	// order
	order: number;
	schema: string;
	type: string;
	// validators
	min: number;
	max: number;
	required: boolean;
	requiredTrue: boolean;
	email: boolean;
	minLength: number;
	maxLength: number;
	pattern: string | RegExp;
	match: string;

	constructor(options: ControlBaseOptions<T> = {}) {
		this.value = options.value;
		this.key = options.key;
		//
		const name = `${options.key || 'Control'} ${++ControlBase.uid}`;
		this.label = options.label || name;
		this.placeholder = options.placeholder || name;
		// order
		this.order = options.order === undefined ? 1 : options.order;
		this.schema = options.schema || 'text';
		this.type = options.type || this.schema;
		// validators
		this.min = options.min || null;
		this.max = options.max || null;
		this.required = !!options.required;
		this.requiredTrue = !!options.requiredTrue;
		this.email = !!options.email;
		this.minLength = options.minLength || null;
		this.maxLength = options.maxLength || null;
		this.pattern = options.pattern || null;
		this.match = options.match || null;
	}
}
