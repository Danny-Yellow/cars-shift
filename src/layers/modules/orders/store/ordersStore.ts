import type { RentRequest } from '@src/shared/api/actions/rent';
import type { Rent } from '@src/shared/types';

import { getRent, getRents } from '@src/shared/api';
import { rent } from '@src/shared/api/actions/rent';
import { createEffect, createEvent, createStore } from 'effector';

export const resetOrdersList = createEvent();
export const resetOrderDetails = createEvent();

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

export const getOrderDetailsFx = createEffect(async (id: string) => {
	const result = await getRent(id);

	return result.data;
});

export const $orderRequest = createStore<Rent>(null).on(bookCarFx.doneData, (_, { rent }) => rent);

export const $ordersList = createStore<Rent[]>(null)
	.on(getOrdersFx.doneData, (_, { rents }) => rents)
	.reset(resetOrdersList);

export const $orderDetails = createStore<Rent>(null)
	.on(getOrderDetailsFx.doneData, (_, rent) => rent)
	.reset(resetOrderDetails);
