const initialState = {
  postsCount: '',
  posts: [],
};

export const SET_POSTS = "SET_POSTS";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_BY_PAGE = "FETCH_POSTS_BY_PAGE";
export const SET_POSTS_COUNT = "SET_POSTS_COUNT";

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };

    case SET_POSTS_COUNT:
      return {...state, postsCount: action.payload};

    default:
      return state;

  }
}

export const setPosts = (payload) => ({ type: SET_POSTS, payload });
export const setPostsCount = (payload) => ({ type: SET_POSTS_COUNT, payload });
export const fetchPosts = () => ({ type: FETCH_POSTS}); ////////////////
export const fetchPostsByPage = (pageNumber, postLimit) => ({ type: FETCH_POSTS_BY_PAGE, pageNumber, postLimit });
