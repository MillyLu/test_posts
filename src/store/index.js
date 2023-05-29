import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import postsReducer from "./postsReducer";
import commentReducer from "./commentReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  postsReducer,
  commentReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
