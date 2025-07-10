import { createEvent, createStore } from 'effector';

export const createPagination = (limit: number = 6) => {
	const setNextPage = createEvent();
	const resetPagination = createEvent();

	const $paginationOptions = createStore({ page: 1, limit })
		.on(setNextPage, (state) => ({ ...state, page: state.page + 1 }))
		.on(resetPagination, () => ({ page: 1, limit }));

	const $hasMore = createStore(true);

	return {
		setNextPage,
		resetPagination,
		$paginationOptions,
		$hasMore,
	};
};
