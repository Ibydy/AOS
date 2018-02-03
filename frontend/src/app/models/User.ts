import {Common} from './Common';

export class User extends Common {

	constructor(public login: string, public password: string) {
		super()
	}
}
