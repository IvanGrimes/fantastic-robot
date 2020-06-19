const getState = (state: RootState) => state.catalog.filters;

export const getFilters = (state: RootState) => getState(state);
