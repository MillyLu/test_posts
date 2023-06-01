const defaultState = {
  comments: [],
};

export const SET_COMMENTS = "SET_COMMENTS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";

export default function commentReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: action.payload };

    default:
      return state;
  }
}

export const setComments = (payload) => ({ type: SET_COMMENTS, payload });
export const fetchComments = (id) => ({
  type: FETCH_COMMENTS,
  id,
});
