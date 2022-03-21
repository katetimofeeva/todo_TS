import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMidlleware from "redux-saga";

import reduser from "./reducer";
import { sagaWatchers } from "./sagas";

const sagaMidlleware = createSagaMidlleware();
const store = createStore(
  reduser,
  composeWithDevTools(applyMiddleware(sagaMidlleware))
);

sagaMidlleware.run(sagaWatchers);
export default store;
