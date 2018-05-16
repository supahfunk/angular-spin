import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

	logs: string[] = [];

	add(log: string) {
		this.logs.push(log);
		// console.log('%c Logger %s ', 'background: #f0f0f0; color: #222', log);
	}

	clear() {
		this.logs = [];
	}
}
