import type { DateRange } from 'react-day-picker';

import { createEvent, createStore } from 'effector';

export const changeSearch = createEvent<string>();
export const setDate = createEvent<DateRange>();

export const $search = createStore<string>('').on(changeSearch, (_, search) => search);

export const $date = createStore<DateRange | undefined>(undefined, { skipVoid: false }).on(
	setDate,
	(_, date) => date,
);
