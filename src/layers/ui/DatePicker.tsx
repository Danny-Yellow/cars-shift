import type { ComponentProps } from 'react';

import { DayPicker } from 'react-day-picker';
import { ru } from 'react-day-picker/locale';

import 'react-day-picker/style.css';

export const DatePicker = (props: ComponentProps<typeof DayPicker>) => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);

	const fromMonth = new Date(today.getFullYear(), today.getMonth(), 1);

	return (
		<DayPicker
			animate
			classNames={{
				chevron: 'dark:fill-gray-80',
				caption: 'dark:bg-black',
				months: 'dark:bg-black',
				head_row: 'dark:bg-black',
				row: 'dark:bg-black',
				cell: 'dark:text-white',
			}}
			disabled={{ before: today }}
			fromMonth={fromMonth}
			locale={ru}
			{...props}
		/>
	);
};
