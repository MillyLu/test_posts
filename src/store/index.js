import { applyMiddleware, combineReducers, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import postsReducer from "./postsReducer";
import commentReducer from "./commentReducer";
import userReducer from "./userReducer";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({
  postsReducer,
  commentReducer,
  userReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);
