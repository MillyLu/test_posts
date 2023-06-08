import { put, call, takeEvery } from "redux-saga/effects";
import {
  FETCH_COMMENTS,
  setComments,
  requestCommentsError,
} from "../store/commentReducer";
import { getCommentsById, loading } from "../apiServices";

function* fetchCommentsWorker(action) {
  try {
    const comments = yield call(getCommentsById, action.id);
    yield loading();
    yield put(setComments(comments, action.id));
  } catch (error) {
    yield put(requestCommentsError(error));
  }
}

export function* commentsWatcher() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}
