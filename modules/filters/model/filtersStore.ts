import { createEvent } from 'effector';
import { createStore, modulesConfig } from '../../../model';
import { Filters } from '../../../model';

export type FiltersType = Partial<{
  [Filters.area]: number;
  [Filters.height]: number;
  [Filters.hasOnlineBooking]: boolean;
}>;

export type FiltersStore = {
  enabled: boolean;
  values: FiltersType | null;
  disabled: boolean;
};

export const updateFilters = createEvent<FiltersType>();

export const changeDisabled = createEvent<boolean>();

export const filtersStore = createStore<FiltersStore>('filters', {
  enabled: modulesConfig.filters,
  values: null,
  disabled: false,
})
  .on(updateFilters, (state, values) => {
    if (state.disabled) {
      return state;
    }

    return { ...state, values };
  })
  .on(changeDisabled, (state, disabled) => ({
    ...state,
    disabled,
  }));
