import {IdGenerator} from '../helpers/IdGenerator';

export class Common {
	public id: string;

	constructor() {
		this.id = IdGenerator.generate();
	}
}
