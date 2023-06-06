import { put, call, takeEvery } from "redux-saga/effects";
import { FETCH_USER, setUser, 
 setCommentsByUser, requestPostsByUserError, requestUserError } from "../store/userReducer";
import { getUserInfoById, getCommentsByUser, loading } from "../apiServices";


function* fetchUserWorker(action) {
  try {
  const user = yield call(getUserInfoById, action.id);
  const comments = yield call(getCommentsByUser, action.id);
  yield loading()
  yield put(setUser(user));
  yield put(setCommentsByUser(comments));
    
  } catch (error) {
   yield put(requestUserError(error)); 
   yield put(requestPostsByUserError(error));
  }

}




export function* userWatcher() {
  yield takeEvery(FETCH_USER, fetchUserWorker);


}
