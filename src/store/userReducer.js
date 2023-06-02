const defaultState = {
  user: [],
  comments: []
};

export const SET_USER = "SET_USER";
export const FETCH_USER = "FETCH_USER";
export const SET_COMMENTS_BY_USER = "SET_COMMENTS_BY_USER";
export const FETCH_COMMENTS_BY_USER = "FETCH_COMMENTS_BY_USER"; 

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    
      case SET_COMMENTS_BY_USER: 
      return {...state, comments: action.payload}

    default:
      return state;
  }
}

export const setUser = (payload) => ({ type: SET_USER, payload });
export const fetchUser = (id) => ({
  type: FETCH_USER,
  id,
});

export const setCommentsByUser = (payload) => ({ type: SET_COMMENTS_BY_USER, payload });
export const fetchCommentsByUser = (id) => ({
  type: FETCH_COMMENTS_BY_USER,
  id,
});
