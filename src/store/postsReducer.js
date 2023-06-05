const initialState = {
  postsCount: "",
  posts: [],
  loading: false,
  error: [],
};

export const SET_POSTS = "SET_POSTS";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_BY_PAGE = "FETCH_POSTS_BY_PAGE";
export const SET_POSTS_COUNT = "SET_POSTS_COUNT";
export const FETCH_POST_BY_TITLE = "FETCH_POST_BY_TITLE";
export const REQUESTED_POSTS_FAILED = "REQUESTED_POSTS_FAILED";
//export const LOADING_POSTS = "LOADING_POSTS";

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, loading: true };

    case SET_POSTS:
      return { ...state, posts: action.payload, loading: false };

    case SET_POSTS_COUNT:
      return { ...state, postsCount: action.payload };

    case REQUESTED_POSTS_FAILED:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
}

//export const loadingPosts = () => ({ type: LOADING_POSTS });
export const setPosts = (payload) => ({ type: SET_POSTS, payload });
export const setPostsCount = (payload) => ({ type: SET_POSTS_COUNT, payload });
export const fetchPosts = () => ({ type: FETCH_POSTS }); ////////////////
export const fetchPostsByPage = (pageNumber, postLimit) => ({
  type: FETCH_POSTS_BY_PAGE,
  pageNumber,
  postLimit,
});
export const fetchPostByTitle = (postTitle) => ({
  type: FETCH_POST_BY_TITLE,
  postTitle,
});

export const requestPostsError = (payload) => ({
  type: REQUESTED_POSTS_FAILED,
  payload,
});
