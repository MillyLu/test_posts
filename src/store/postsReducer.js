const initialState = {
  posts: [],
};

export const SET_POSTS = "SET_POSTS";
export const FETCH_POSTS = "FETCH_POSTS";

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
}

export const setPosts = (payload) => ({ type: SET_POSTS, payload });
export const fetchPosts = () => ({ type: FETCH_POSTS });
