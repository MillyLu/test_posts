import { all } from "redux-saga/effects";
import { postsByPageWatchers, postsWatchers } from "./posts";
import { commentsWatcher } from "./comments";

export function* rootWatcher() {
  yield all([postsWatchers(), commentsWatcher(), postsByPageWatchers]);
}
