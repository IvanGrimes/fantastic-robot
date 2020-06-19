import { FiltersEnum, actions as sharedActions } from '@shared';
import { createReducer } from 'typesafe-actions';
import { mergeDeepRight } from 'ramda';
import { update } from './actions';

export type FiltersState = {
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

export const initialState: FiltersState = {
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
};

export const reducer = createReducer(initialState)
  .handleAction(sharedActions.fetchConfigAsync.success, (state, action) => {
    const config = action.payload;
    const area = state[FiltersEnum.area];
    const height = state[FiltersEnum.height];
    const price = state[FiltersEnum.price];

    return {
      ...state,
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
    };
  })
  .handleAction(update, (state, action) => ({
    ...state,
    ...mergeDeepRight(state, action.payload),
  }));
