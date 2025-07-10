import { format, isValid, parse } from 'date-fns';

export const getDaysCount = ({ from, to }: { from: Date; to: Date }) => {
	const start = new Date(from.getFullYear(), from.getMonth(), from.getDate());
	const end = new Date(to.getFullYear(), to.getMonth(), to.getDate());
	const diffTime = end.getTime() - start.getTime();
	const diffDays = Math.abs(Math.ceil(diffTime / (1000 * 60 * 60 * 24))) + 1;
	return diffDays;
};

export const getFormattedDateRange = (date: { from: Date; to: Date }) => {
	if (!date.from || !date.to) return '';

	const dayTo = date.to.toLocaleDateString();
	const dayFrom = date.from.toLocaleDateString();

	return `${dayFrom} — ${dayTo}`;
};

export const convertToISO = (dateString: string): string => {
	const date = parse(dateString, 'dd.MM.yyyy', new Date());
	if (!isValid(date) || format(date, 'dd.MM.yyyy') !== dateString) return dateString;
	return format(date, 'yyyy-MM-dd');
};
