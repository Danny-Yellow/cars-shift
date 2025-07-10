import { stripNonDigits } from '../../stripNonDigits';

export const validPhone = (value: string) => {
	return stripNonDigits(value).length === 11;
};
