import { put, takeEvery, call } from "redux-saga/effects";
import {
  FETCH_POSTS,
  setPosts,
  FETCH_POSTS_BY_PAGE,
  FETCH_POST_BY_TITLE,
} from "../store/postsReducer";
import { getAllPosts, getPostByPage, getPostByTitle } from "../apiServices";

const requestPostsError = () => {
  return { type: "REQUESTED_POSTS_FAILED" };
};

const loading = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });

function* fetchPostsWorker() {
  try {
    const posts = yield call(getAllPosts);

    yield loading();

    yield put(setPosts(posts));
  } catch (error) {
    yield put(requestPostsError);
  }
}

function* fetchPostsByPageWorker(action) {
  const post = yield call(getPostByPage, action.pageNumber, action.postLimit);
  yield put(setPosts(post));
}

function* fetchPostByTitle(action) {
  const postByTitle = yield call(getPostByTitle, action.postTitle);
  yield put(setPosts(postByTitle));
}

export function* postsByPageWatchers() {
  yield takeEvery(FETCH_POSTS_BY_PAGE, fetchPostsByPageWorker);
}

export function* postsWatchers() {
  yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}

export function* postByTitleWatchers() {
  yield takeEvery(FETCH_POST_BY_TITLE, fetchPostByTitle);
}
