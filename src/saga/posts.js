import { put, takeEvery, call } from "redux-saga/effects";
import {
  FETCH_POSTS,
  setPosts,
  setPostsCount,
  FETCH_POSTS_BY_PAGE,
} from "../store/postsReducer";
import { LOADED_POSTS, LOADING_POSTS } from "../store/loadingReducer";
import { getAllPosts, getPostByPage } from "../apiServices";

const requestPostsError = () => {
  return { type: "REQUESTED_POSTS_FAILED" };
};

const loading = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  });
 
function* fetchPostsWorker() {   ///////////////
  try {
    yield put({ type: LOADING_POSTS, payload: "true" });
    const postsCount = yield call(getAllPosts); //////////////////////
    const post = yield call(getPostByPage, 1, 10);
    yield loading();
    yield put({ type: LOADED_POSTS, payload: "false" });
    yield put(setPostsCount(postsCount));
    yield put(setPosts(post));
  } catch (error) {
    yield put(requestPostsError);
  }
}

function* fetchPostsByPageWorker(action) {
  const post = yield call(getPostByPage, action.pageNumber, action.postLimit);
  yield put(setPosts(post));
}

export function* postsByPageWatchers() {
  yield takeEvery(FETCH_POSTS_BY_PAGE, fetchPostsByPageWorker);
}

export function* postsWatchers() {
  yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}
