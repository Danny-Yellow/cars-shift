import type { CarsQuery } from '@src/shared/api';
import type { Car } from '@src/shared/types/entities';

import { getCars } from '@src/shared/api';
import { createPagination } from '@src/shared/store';
import { debounce } from '@src/shared/utils';
import { createEffect, createEvent, createStore, sample } from 'effector';

import { $filter, $price, $search, changeSearch, showCars } from './paramsStore';

export const { setNextPage, resetPagination, $paginationOptions, $hasMore } = createPagination();

export const debouncedChangeSearch = createEvent<string>();
export const resetCarsList = createEvent();

export const fetchCarsFx = createEffect(async (query?: CarsQuery) => {
	const result = await getCars({
		params: query,
	});

	return result.data;
});

export const $carsList = createStore<Car[]>([])
	.on(fetchCarsFx.doneData, (state, { data }) => state.concat(data))
	.reset(resetCarsList);

changeSearch.watch((value) => {
	debounce(() => debouncedChangeSearch(value), 500);
});

sample({
	clock: [debouncedChangeSearch, showCars],
	target: [resetPagination, resetCarsList],
});

sample({
	source: { $filter, $search, $price, $paginationOptions },
	clock: [resetPagination, setNextPage],
	fn: (state) => ({
		search: state.$search,
		maxPrice: state.$price,
		...state.$filter,
		transmission: state.$filter.transmission === 'any' ? undefined : state.$filter.transmission,
		...state.$paginationOptions,
	}),
	target: fetchCarsFx,
});

$hasMore.on(fetchCarsFx.doneData, (_, { meta }) => meta.page < meta.totalPages);
