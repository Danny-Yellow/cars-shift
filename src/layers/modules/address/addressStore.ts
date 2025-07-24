import { getAddresses } from '@src/shared/api';
import { createEffect, createStore } from 'effector';

export const fetchAddressesFx = createEffect(async (query: string) => {
	const response = await getAddresses({ params: { query, count: 10 } });
	return response.data;
});

export const $addresses = createStore<{ value: string }[]>([]).on(
	fetchAddressesFx.doneData,
	(_, data) => data.suggestions,
);
