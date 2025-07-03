import { createEvent, createStore } from 'effector';


export function createPagination(limit: number = 6) {
  const setNextPage = createEvent();
  const resetPagination = createEvent();

  const $paginationOptions = createStore({ page: 0, limit })
    .on(setNextPage, (state) => ({ ...state, page: state.page + 1 }))
    .on(resetPagination, () => ({ page: 0, limit}));

  const $hasMore = createStore(true);

  return {
    setNextPage,
    resetPagination,
    $paginationOptions,
    $hasMore,
  };
}