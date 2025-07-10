import type { RentRequest } from '@src/shared/api/actions/rent';
import type { Rent } from '@src/shared/types';

import { getRents } from '@src/shared/api';
import { rent } from '@src/shared/api/actions/rent';
import { createEffect, createStore } from 'effector';

export const bookCarFx = createEffect(async (data: RentRequest) => {
	const result = await rent({
		data,
	});

	return result.data;
});

export const getOrdersFx = createEffect(async () => {
	const result = await getRents();

	return result.data;
});

export const $orderRequest = createStore<Rent | null>(null).on(
	bookCarFx.doneData,
	(_, { rent }) => rent,
);

export const $ordersList = createStore<Rent[]>([]).on(
	getOrdersFx.doneData,
	(_, { rents }) => rents,
);
