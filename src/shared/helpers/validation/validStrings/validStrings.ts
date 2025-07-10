import { cyrillicRegex, latinRegex, nonAlphabeticCharsRegex } from '@src/shared/constants';

export const validCyrillicOrLatin = (value: string) => {
	if (!value) return true;
	return cyrillicRegex.test(value) || latinRegex.test(value);
};

export const validFirstLetterCapitalised = (value: string) => {
	if (!value) return true;
	return value[0] === value[0].toUpperCase();
};

export const validAlphabeticChars = (value: string) => {
	if (!value) return true;
	return !value.match(nonAlphabeticCharsRegex);
};

export const validHyphenAndApostrophe = (value: string) => {
	if (!value) return true;
	return !/(['-]).*?\1|^['-]|['-]$/.test(value);
};

export const containsUppercaseNotAtStart = (value: string) => {
	return /.[A-ZА-Я]/.test(value);
};
