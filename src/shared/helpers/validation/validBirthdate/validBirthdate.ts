import { format, isValid, parse } from 'date-fns';

export const validBirthdate = (value: string) => {
	const date = parse(value, 'dd.MM.yyyy', new Date());
	return isValid(date) && format(date, 'dd.MM.yyyy') === value;
};
