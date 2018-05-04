import { Injectable } from '@angular/core';

@Injectable()
export class Logger {

	logs: string[] = [];

	add(log: string) {
		this.logs.push(log);
		console.log(log);
	}

	clear() {
		this.logs = [];
	}
}
