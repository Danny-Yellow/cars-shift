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
				chevron: 'fill-gray-30',
			}}
			disabled={{ before: today }}
			fromMonth={fromMonth}
			locale={ru}
			{...props}
		/>
	);
};
