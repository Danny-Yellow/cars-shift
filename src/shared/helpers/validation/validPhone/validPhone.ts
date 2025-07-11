import { stripNonDigits } from '../../stripNonDigits';

export const validPhone = (value: string) => stripNonDigits(value).length === 11;
