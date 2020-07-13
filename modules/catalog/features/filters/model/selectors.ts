const getState = (state: RootState) => state.catalog.filters;

export const getFilters = (state: RootState) => getState(state).values;

export const getWereFiltersParsed = (state: RootState) =>
  getState(state).parsed;
