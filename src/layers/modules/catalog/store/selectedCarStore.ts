import type { Car } from '@src/shared/types';

import { getCar } from '@src/shared/api';
import { createEffect, createEvent, createStore } from 'effector';

export const resetSelectedCar = createEvent();

export const fetchCarFx = createEffect(async (id: string) => {
	const response = await getCar(id);
	return response.data;
});

export const $selectedCar = createStore<Car | null>(null)
	.on(fetchCarFx.doneData, (_, { data }) => data)
	.reset(resetSelectedCar);
