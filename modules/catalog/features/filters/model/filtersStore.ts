import { createEvent } from 'effector';
import { createStore, modulesConfig } from '@model';
import { FiltersEnum } from './types';

export type FiltersType = {
  [FiltersEnum.textSearch]: string;
  [FiltersEnum.area]: {
    from: string;
    to: string;
  };
  [FiltersEnum.height]: {
    from: string;
    to: string;
  };
  [FiltersEnum.price]: {
    from: string;
    to: string;
  };
  [FiltersEnum.hasOnlineBooking]: boolean;
};

export type UpdateFilters = typeof updateFilters;

export type FiltersStore = {
  enabled: boolean;
  values: FiltersType;
  disabled: boolean;
};

export const updateFilters = createEvent<DeepPartial<FiltersType>>();

export const changeDisabled = createEvent<boolean>();

export const filtersStore = createStore<FiltersStore>('filters', {
  enabled: modulesConfig.catalog.filters,
  values: {
    [FiltersEnum.textSearch]: '',
    [FiltersEnum.hasOnlineBooking]: false,
    [FiltersEnum.height]: {
      from: '',
      to: '',
    },
    [FiltersEnum.area]: {
      from: '',
      to: '',
    },
    [FiltersEnum.price]: {
      from: '',
      to: '',
    },
  },
  disabled: false,
})
  .on(updateFilters, (state, values) => {
    if (!state.disabled) {
      return {
        ...state,
        values: {
          ...state.values,
          ...values,
          [FiltersEnum.area]: {
            ...state.values[FiltersEnum.area],
            ...(values[FiltersEnum.area] || {}),
          },
          [FiltersEnum.height]: {
            ...state.values[FiltersEnum.height],
            ...(values[FiltersEnum.height] || {}),
          },
          [FiltersEnum.price]: {
            ...state.values[FiltersEnum.price],
            ...(values[FiltersEnum.price] || {}),
          },
        },
      };
    }

    return state;
  })
  .on(changeDisabled, (state, disabled) => ({
    ...state,
    disabled,
  }));
