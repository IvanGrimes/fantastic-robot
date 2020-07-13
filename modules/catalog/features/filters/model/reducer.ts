import { actions as sharedActions, FiltersEnum } from '@shared';
import { createReducer } from 'typesafe-actions';
import { mergeDeepRight, mergeDeepWith } from 'ramda';
import { clear, update } from './actions';
import { SortEnum } from './types';
import { ListVariantEnum } from '../../../model';

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
  [FiltersEnum.sort]: SortEnum;
  [FiltersEnum.list]: ListVariantEnum;
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
  [FiltersEnum.sort]: SortEnum.nameAsc,
  [FiltersEnum.list]: ListVariantEnum.studio,
};

let partialStateFromConfig: Partial<FiltersState> | null = null;

export const reducer = createReducer(initialState)
  .handleAction(sharedActions.fetchConfigAsync.success, (state, action) => {
    const config = action.payload;
    partialStateFromConfig = {
      [FiltersEnum.area]: {
        from: config[FiltersEnum.area].min.toString(),
        to: config[FiltersEnum.area].max.toString(),
      },
      [FiltersEnum.height]: {
        from: config[FiltersEnum.height].min.toString(),
        to: config[FiltersEnum.height].max.toString(),
      },
      [FiltersEnum.price]: {
        from: config[FiltersEnum.price].min.toString(),
        to: config[FiltersEnum.price].max.toString(),
      },
    };

    return mergeDeepWith(
      (left, right) => (Number.isInteger(parseInt(left, 10)) ? left : right),
      state,
      partialStateFromConfig
    );
  })
  .handleAction(update, (state, action) => ({
    ...state,
    ...mergeDeepRight(state, action.payload),
  }))
  .handleAction(clear, (_state, action) => {
    const nextState = { ...initialState, ...partialStateFromConfig };

    action.payload(nextState);

    return nextState;
  });
