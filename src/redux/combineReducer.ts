import { combineReducers } from "redux";
import reducer from "./reducer";
import {appReducer} from '../redux/appReducer'

export const rootReducer = combineReducers({
  todo: reducer,
  app: appReducer
});

export type RootState = ReturnType<typeof rootReducer>;
