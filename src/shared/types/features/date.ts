import type { DateRange } from 'react-day-picker';

export interface DateStore {
	daysCount: number;
	daysDeclension: string;
	formattedRange: string;
	range: DateRange | undefined;
}
