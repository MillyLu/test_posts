import { put, call, takeEvery } from "redux-saga/effects";
import { FETCH_USER, setUser, 
FETCH_COMMENTS_BY_USER, setCommentsByUser } from "../store/userReducer";
import { getUserInfoById, getCommentsByUser } from "../apiServices";

const loading = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });


function* fetchUserWorker(action) {
  try {
  const user = yield call(getUserInfoById, action.id);
  const comments = yield call(getCommentsByUser, action.id);
  loading()
  yield put(setUser(user));
  yield put(setCommentsByUser(comments));
    
  } catch (error) {
    
  }

}



export function* userWatcher() {
  yield takeEvery(FETCH_USER, fetchUserWorker);

}
