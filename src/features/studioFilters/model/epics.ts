import { Epic } from 'redux-observable';
import { debounceTime, filter, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { EpicDependencies, RootAction, RootState } from '../../../model/types';

export const setFiltersFlow: Epic<
  RootAction,
  RootAction,
  RootState,
  EpicDependencies
> = (
  action$,
  _state$,
  {
    actions: {
      studioFiltersActions: { setFilters },
      studioListActions: { fetchFilterStudiosAsync },
    },
  }
) =>
  action$.pipe(
    filter(isActionOf(setFilters)),
    debounceTime(500),
    map(() => {
      return fetchFilterStudiosAsync.request({ page: 1, city: 'moscow' });
    })
  );

export const studioFiltersEpic = [setFiltersFlow];
