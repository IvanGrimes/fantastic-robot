import { ActionType, StateType } from "typesafe-actions";
import rootAction from "./rootAction";
import { rootReducer } from "./rootReducer";
import { rootApi } from "./rootApi";

export type RootAction = ActionType<typeof rootAction>;

export type RootState = StateType<typeof rootReducer>;

export type RootApi = typeof rootApi;

export type EpicDependencies = {
  api: RootApi;
  action: typeof rootAction;
};

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
    RootState: RootState;
  }
}
