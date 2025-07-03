import type { Car } from '@src/shared/types/car';

import { getCars } from '@src/shared/api/entities/cars';
import { createEffect, createStore } from 'effector';

export const fetchCarsFx = createEffect(async () => {
	const result = await getCars();
	return result.data;
});

export const $carsList = createStore<Car[] | null>(null).on(
	fetchCarsFx.doneData,
	(_, { data }) => data,
);
