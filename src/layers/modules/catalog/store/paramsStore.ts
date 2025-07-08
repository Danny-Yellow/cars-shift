import type { BodyType, Brand, Color, Transmission } from '@src/shared/types';
import type { DateRange } from 'react-day-picker';

import { createEvent, createStore } from 'effector';

import type { Filter } from '../types/filter';

export const changeSearch = createEvent<string>();
export const setDate = createEvent<DateRange>();
export const setBrand = createEvent<Brand>();
export const setBodyType = createEvent<BodyType>();
export const setColors = createEvent<Color[]>();
export const setTransmission = createEvent<'any' | Transmission>();
export const setPrice = createEvent<number>();
export const showCars = createEvent();
export const resetFilter = createEvent();

export const $search = createStore<string>('').on(changeSearch, (_, search) => search);

export const $date = createStore<DateRange | undefined>(undefined, { skipVoid: false }).on(
	setDate,
	(_, date) => date,
);

export const $filter = createStore<Filter>({
	brand: undefined,
	bodyType: undefined,
	colors: undefined,
	transmission: 'any',
})
	.on(setBrand, (state, brand) => ({ ...state, brand }))
	.on(setBodyType, (state, bodyType) => ({ ...state, bodyType }))
	.on(setColors, (state, colors) => ({ ...state, colors }))
	.on(setTransmission, (state, transmission) => ({ ...state, transmission }))
	.reset(resetFilter);

export const $price = createStore<number | null>(null)
	.on(setPrice, (_, price) => price)
	.reset(resetFilter);
