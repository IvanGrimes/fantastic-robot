import { createEvent } from 'effector';
import { createStore } from '../../../../../model';

type Filters = Partial<{ area: number; height: number }>;

export type FiltersStore = null | Filters | {};

export const changeFilters = createEvent<Filters>();

export const filtersStore = createStore<FiltersStore>('filters', null).on(
  changeFilters,
  (_, payload) => payload
);
