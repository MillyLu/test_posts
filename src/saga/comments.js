import { put, call, takeEvery } from "redux-saga/effects";
import { FETCH_COMMENTS, setComments } from "../store/commentReducer";
import { getCommentsById } from "../apiServices";

function* fetchCommentsWorker(action) {
  const comments = yield call(getCommentsById, action.id);
  yield put(setComments(comments));
}

export function* commentsWatcher() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}
