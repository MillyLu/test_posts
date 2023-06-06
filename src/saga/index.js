import { all, fork } from "redux-saga/effects";
import {
  postsWatchers,
} from "./posts";
import { commentsWatcher } from "./comments";
import { userWatcher } from "./user";

export function* rootWatcher() {
  yield all([
    fork(postsWatchers),
    fork(commentsWatcher),
    fork(userWatcher),
  ]);
}
