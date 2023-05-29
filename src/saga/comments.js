import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_COMMENTS, setComments } from "../store/commentReducer";

const fetchCommentsFromApi = (id) =>
  fetch(`ttps://jsonplaceholder.typicode.com/comments?postId=${id}`);

function* fetchCommentsWorker() {
  const data = yield call(fetchCommentsFromApi());
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setComments(json));
}

export function* commentsWatcher() {
  yield takeEvery(FETCH_COMMENTS, fetchCommentsWorker);
}
