import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_POSTS, setPosts } from "../store/postsReducer";

const fetchPostsFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/posts");

  const requestPostsError = () => {
    return { type: 'REQUESTED_POSTS_FAILED' }
  };
  

function* fetchPostsWorker() {
    try{
        const data = yield call(fetchPostsFromApi);
        const json = yield call(() => new Promise((res) => res(data.json())));
        yield put(setPosts(json));

    }
    catch(error) {
        yield put(requestPostsError)
    }
  
}

export function* postsWatchers() {
  yield takeEvery(FETCH_POSTS, fetchPostsWorker);
}
