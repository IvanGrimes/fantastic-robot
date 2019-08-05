import { createReducer } from "typesafe-actions";
import { fetchStudiosAsync } from "./actions";
import { ShortStudio } from "./types";

type State = {
  studios: ShortStudio[],
};

const initialState: State = {
  studios: []
};

export const dataReducer = createReducer(initialState).handleAction(
  fetchStudiosAsync.success,
  (state, { payload }) => ({ ...state, studios: payload })
);

