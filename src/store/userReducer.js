const defaultState = {
  user: [],
  comments: [],
  loading: false,
};

export const SET_USER = "SET_USER";
export const FETCH_USER = "FETCH_USER";
export const SET_COMMENTS_BY_USER = "SET_COMMENTS_BY_USER";
export const FETCH_COMMENTS_BY_USER = "FETCH_COMMENTS_BY_USER"; 

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, loading: true };

    case FETCH_COMMENTS_BY_USER:
      return { ...state, loading: true };  

    case SET_USER:
      return { ...state, user: action.payload, loading: false };
    
      case SET_COMMENTS_BY_USER: 
      return {...state, comments: action.payload, loading: false };

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
