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
