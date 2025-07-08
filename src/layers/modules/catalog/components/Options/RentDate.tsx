import { Calendar as CalendarIcon } from '@src/layers/components/icons';
import {
	Popover,
	PopoverAnchor,
	PopoverContent,
	PopoverPortal,
	PopoverTrigger,
} from '@src/layers/ui';
import { DatePicker } from '@src/layers/ui/DatePicker';
import { Typography } from '@src/layers/ui/Typography';
import { declensionDays, getDaysCount, getFormattedDateRange } from '@src/shared/helpers';
import { useUnit } from 'effector-react';

import { $date, setDate } from '../../store/paramsStore';

export const RentDate = () => {
	const date = useUnit($date);

	const getTextFieldValue = () => {
		if (!date?.from || !date?.to) return 'Выберите дату';

		const range = getFormattedDateRange({ from: date?.from, to: date?.to });
		const daysCount = getDaysCount({ from: date?.from, to: date?.to });
		const daysDeclension = declensionDays(daysCount);
		return `${range} (${daysCount} ${daysDeclension})`;
	};

	return (
		<label className="w-full">
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
						<DatePicker selected={date} mode="range" onSelect={setDate} />
					</PopoverContent>
				</PopoverPortal>
			</Popover>
		</label>
	);
};
