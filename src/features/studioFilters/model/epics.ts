import { Epic } from 'redux-observable';
import { debounceTime, filter, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { EpicDependencies, RootAction, RootState } from '../../../model/types';
import { getFilters, getHasFilters } from './selectors';

export const setFiltersFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  state$,
  {
    actions: {
      studioFiltersActions: { setFilters },
      studioListActions: { fetchStudiosAsync },
    },
  }
) => {
  const hasAppliedFilters = getHasFilters(state$.value);

  return action$.pipe(
    filter(isActionOf(setFilters)),
    debounceTime(500),
    map(() => {
      const filters = getFilters(state$.value);

      return fetchStudiosAsync.request({
        ...filters,
        priceSegments: filters.priceSegments,
        listUpdateType: hasAppliedFilters ? 'merge' : 'replace',
        isFiltering: true,
      });
    })
  );
};

export const studioFiltersEpic = [setFiltersFlow];
