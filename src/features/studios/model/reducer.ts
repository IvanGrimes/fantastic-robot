import { createReducer } from 'typesafe-actions';
import { setStudioMapPreview } from './actions';
import { ShortStudio } from '../../studioList/model/types';

export type StudiosState = {
  map: {
    preview: ShortStudio['id'] | null;
  };
};

const initialState: StudiosState = {
  map: {
    preview: null,
  },
};

export const studiosReducer = createReducer(initialState).handleAction(
  setStudioMapPreview,
  (state, { payload }) => ({
    ...state,
    map: {
      ...state.map,
      preview: state.map.preview === payload.id ? null : payload.id,
    },
  })
);
