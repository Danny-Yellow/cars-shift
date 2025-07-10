import type { DateStore } from '@src/shared/types';
import type { ComponentProps } from 'react';
import type { DateRange } from 'react-day-picker';

import { Calendar as CalendarIcon } from '@src/layers/components/icons';
import {
	DatePicker,
	Popover,
	PopoverAnchor,
	PopoverContent,
	PopoverPortal,
	PopoverTrigger,
	Typography,
} from '@src/layers/ui';

interface RentDateProps extends ComponentProps<'label'> {
	date: DateStore;
	setDate: (date: DateRange) => void;
}

export const RentDate = ({ date, setDate, ...props }: RentDateProps) => {
	const getTextFieldValue = () => {
		if (!date?.range) return 'Выберите дату';

		return `${date.formattedRange} (${date.daysCount} ${date.daysDeclension})`;
	};

	return (
		<label className="w-full" {...props}>
			<Typography className="mb-2" variant="p_14_regular">
				Дата аренды
			</Typography>
			<Popover>
				<PopoverTrigger asChild>
					<button className="outline-gray-70 dark:text-gray-70 flex w-full cursor-pointer items-center justify-between rounded-md bg-white px-3 py-3 text-gray-50 outline-1 dark:bg-black">
						<span>{getTextFieldValue()}</span>
						<CalendarIcon />
					</button>
				</PopoverTrigger>
				<PopoverAnchor />
				<PopoverPortal>
					<PopoverContent className="rounded-md p-4" sideOffset={10}>
						<DatePicker selected={date.range} mode="range" onSelect={setDate} />
					</PopoverContent>
				</PopoverPortal>
			</Popover>
		</label>
	);
};
