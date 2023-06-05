const defaultState = {
  comments: [],
  loading: false,
};

export const SET_COMMENTS = "SET_COMMENTS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";

export default function commentReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, loading: true };

    case SET_COMMENTS:
      return { ...state, comments: action.payload, loading: false };

    default:
      return state;
  }
}

export const setComments = (payload) => ({ type: SET_COMMENTS, payload });
export const fetchComments = (id) => ({
  type: FETCH_COMMENTS,
  id,
});
