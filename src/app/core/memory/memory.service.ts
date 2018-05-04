import { InMemoryDbService } from 'angular-in-memory-web-api';

import * as Datas from '../../datas';

export class MemoryService implements InMemoryDbService {
	createDb() {
		return Datas;
	}
}
