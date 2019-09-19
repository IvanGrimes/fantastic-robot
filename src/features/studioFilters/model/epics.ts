import { Epic } from 'redux-observable';
import { debounceTime, filter, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { EpicDependencies, RootAction, RootState } from '../../../model/types';
import { getHasFilters } from './selectors';

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
      studioListActions: { fetchFilterStudiosAsync },
    },
  }
) => {
  const previousHasFilters = getHasFilters(state$.value);

  return action$.pipe(
    filter(isActionOf(setFilters)),
    debounceTime(500),
    map(() => {
      const hasFilters = getHasFilters(state$.value);

      return fetchFilterStudiosAsync.request({
        page: 1,
        city: 'moscow',
        updateStrategy:
          hasFilters && (previousHasFilters && !hasFilters)
            ? 'replace'
            : 'merge',
      });
    })
  );
};

export const studioFiltersEpic = [setFiltersFlow];
