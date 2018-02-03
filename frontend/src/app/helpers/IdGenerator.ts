import * as moment from 'moment';
export class IdGenerator {
	public static readonly ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	public static readonly ID_LENGTH = 8;

	public static generate = (): string => {
		let rtn = '';
		for (let i = 0; i < IdGenerator.ID_LENGTH; i++) {
			rtn += IdGenerator.ALPHABET.charAt(Math.floor(Math.random() * IdGenerator.ALPHABET.length));
		}
		const secPart = moment().unix().toString(36);
		return rtn + secPart;
	};
}
