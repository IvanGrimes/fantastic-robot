import { createEvent } from 'effector';
import { createStore, modulesConfig, configService, FiltersEnum } from '@model';
import { mergeDeepRight } from 'ramda';

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
  [FiltersEnum.metro]: { [key: string]: boolean | undefined };
  [FiltersEnum.hasOnlineBooking]: boolean;
  [FiltersEnum.comfort]: { [key: string]: boolean | undefined };
  [FiltersEnum.interior]: { [key: string]: boolean | undefined };
  [FiltersEnum.equipment]: { [key: string]: boolean | undefined };
};

export type UpdateFilters = typeof updateFilters;

export type FiltersStore = {
  enabled: boolean;
  values: FiltersType;
  disabled: boolean;
};

export const updateFilters = createEvent<DeepPartial<FiltersType>>();

export const clearFilters = createEvent();

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
    [FiltersEnum.metro]: {},
    [FiltersEnum.comfort]: {},
    [FiltersEnum.interior]: {},
    [FiltersEnum.equipment]: {},
  },
  disabled: false,
})
  .on(configService.effect.doneData, (state, configEntity) => {
    const config = configEntity.getData();
    const area = state.values[FiltersEnum.area];
    const height = state.values[FiltersEnum.height];
    const price = state.values[FiltersEnum.price];

    return {
      ...state,
      values: {
        ...state.values,
        [FiltersEnum.area]: {
          from: area.from || config[FiltersEnum.area].min.toString(),
          to: area.to || config[FiltersEnum.area].max.toString(),
        },
        [FiltersEnum.height]: {
          from: height.from || config[FiltersEnum.height].min.toString(),
          to: height.to || config[FiltersEnum.height].max.toString(),
        },
        [FiltersEnum.price]: {
          from: price.from || config[FiltersEnum.price].min.toString(),
          to: price.to || config[FiltersEnum.price].max.toString(),
        },
      },
    };
  })
  .on(updateFilters, (state, values) => {
    if (!state.disabled) {
      return {
        ...state,
        values: mergeDeepRight(state.values, values),
      };
    }

    return state;
  })
  .on(changeDisabled, (state, disabled) => ({
    ...state,
    disabled,
  }));
