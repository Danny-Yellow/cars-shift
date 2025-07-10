import type { RentRequest } from '@src/shared/api/actions/rent';
import type { Rent } from '@src/shared/types';

import { rent } from '@src/shared/api/actions/rent';
import { createEffect, createStore } from 'effector';

export const bookCarFx = createEffect(async (data: RentRequest) => {
	const result = await rent({
		data,
	});

	return result.data;
});

export const $order = createStore<Rent | null>(null).on(bookCarFx.doneData, (_, { rent }) => rent);
