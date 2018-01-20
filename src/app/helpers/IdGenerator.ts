export class IdGenerator {
	public static readonly ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	public static readonly ID_LENGTH = 8;

	public static generate = (): string => {
		let rtn = '';
		for (let i = 0; i < IdGenerator.ID_LENGTH; i++) {
			rtn += IdGenerator.ALPHABET.charAt(Math.floor(Math.random() * IdGenerator.ALPHABET.length));
		}
		return rtn;
	};
}
