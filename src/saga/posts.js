import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_POSTS, setPosts } from "../store/postsReducer";
import {
  LOADED_POSTS,
  LOADING_POSTS,
  setLoading,
  setLoaded,
} from "../store/loadingReducer";

const fetchPostsFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/posts");

const requestPostsError = () => {
  return { type: "REQUESTED_POSTS_FAILED" };
};

const loading = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 5000);
  });

function* fetchPostsWorker() {
  try {
    yield put({ type: LOADING_POSTS, payload: "true" });
    const data = yield call(fetchPostsFromApi);
    const json = yield call(() => new Promise((res) => res(data.json())));
    yield loading();
    yield put({ type: LOADED_POSTS, payload: 'false' });
    yield put(setPosts(json));
  } catch (error) {
    yield put(requestPostsError);
  }
}

export function* postsWatchers() {
  yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}
