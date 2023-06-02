import { put, call, takeEvery } from "redux-saga/effects";
import { FETCH_USER, setUser, 
FETCH_COMMENTS_BY_USER, setCommentsByUser } from "../store/userReducer";
import { getUserInfoById, getCommentsByUser } from "../apiServices";

function* fetchUserWorker(action) {
  const user = yield call(getUserInfoById, action.id);
  yield put(setUser(user));
  const comments = yield call(getCommentsByUser, action.id);
  yield put(setCommentsByUser(comments));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USER, fetchUserWorker);
}
