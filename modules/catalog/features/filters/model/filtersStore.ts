import { createEvent } from 'effector';
import { createStore, modulesConfig } from '@model';
import { FiltersEnum } from './types';

export type FiltersType = Partial<{
  [FiltersEnum.area]: number;
  [FiltersEnum.height]: number;
  [FiltersEnum.hasOnlineBooking]: boolean;
}>;

export type FiltersStore = {
  enabled: boolean;
  values: FiltersType | null;
  disabled: boolean;
};

export const updateFilters = createEvent<FiltersType>();

export const changeDisabled = createEvent<boolean>();

export const filtersStore = createStore<FiltersStore>('filters', {
  enabled: modulesConfig.catalog.filters,
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
