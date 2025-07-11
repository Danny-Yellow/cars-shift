import { validBirthdate } from './validBirthdate';

describe('validBirthdate', () => {
	it('accepts valid birthdates', () => {
		expect(validBirthdate('01.01.2000')).toBe(true);
		expect(validBirthdate('31.12.1999')).toBe(true);
		expect(validBirthdate('29.02.2004')).toBe(true); // високосный год
	});

	it('rejects invalid dates', () => {
		expect(validBirthdate('32.01.2000')).toBe(false);
		expect(validBirthdate('00.12.1999')).toBe(false);
		expect(validBirthdate('29.02.2001')).toBe(false); // не високосный год
		expect(validBirthdate('31.04.2020')).toBe(false); // в апреле 30 дней
	});

	it('rejects invalid format', () => {
		expect(validBirthdate('2000-01-01')).toBe(false);
		expect(validBirthdate('01/01/2000')).toBe(false);
		expect(validBirthdate('01.01.00')).toBe(false);
		expect(validBirthdate('')).toBe(false);
	});
});
