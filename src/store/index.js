import { applyMiddleware, combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import postsReducer from "./postsReducer";
import commentReducer from "./commentReducer";
import userReducer from "./userReducer";
import createSagaMiddleware from "redux-saga";
import loading from "./loadingReducer";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  postsReducer,
  commentReducer,
  userReducer,
  loading,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
