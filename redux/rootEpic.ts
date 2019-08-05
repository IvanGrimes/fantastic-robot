import { combineEpics } from "redux-observable";
import { fetchStudiosFlow } from "./data/epics";

export const rootEpic = combineEpics(fetchStudiosFlow);
