import { put, call, takeEvery } from "redux-saga/effects";
import { FETCH_COMMENTS, setComments } from "../store/commentReducer";
import { getCommentsById } from "../apiServices";

const loading = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });

function* fetchCommentsWorker(action) {
  const comments = yield call(getCommentsById, action.id);
  loading();
  yield put(setComments(comments));
}

export function* commentsWatcher() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}
