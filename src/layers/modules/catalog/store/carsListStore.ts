import type { CarsQuery } from '@src/shared/api/entities';
import type { Car } from '@src/shared/types';

import { getCars } from '@src/shared/api/entities';
import { createPagination } from '@src/shared/store';
import { createEffect, createStore, sample } from 'effector';

export const { setNextPage, $paginationOptions, $hasMore } = createPagination();

export const fetchCarsFx = createEffect(async (query?: CarsQuery) => {
	const result = await getCars({
		params: query,
	});

	return result.data;
});

export const $carsList = createStore<Car[]>([]).on(fetchCarsFx.doneData, (state, { data }) =>
	state.concat(data),
);

sample({
	source: $paginationOptions,
	clock: setNextPage,
	fn: (state) => ({ limit: state.limit, page: state.page }),
	target: fetchCarsFx,
});

$hasMore.on(fetchCarsFx.doneData, (_, { meta }) => meta.page < meta.totalPages);
