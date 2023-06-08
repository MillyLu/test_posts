const defaultState = {
  comments: {},
  loading: false,
  error: "",
  id: "",
};

export const SET_COMMENTS = "SET_COMMENTS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const REQUESTED_COMMENTS_FAILED = "REQUESTED_COMMENTS_FAILED";

export default function commentReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return { ...state, loading: true, id: action.id};

    case SET_COMMENTS: 
      return { ...state, comments: {...state.comments, [action.id ]: action.payload}, loading: false };

    case REQUESTED_COMMENTS_FAILED:
      return { ...state, error: action.payload, loading: false};  

    default:
      return state;
  }
}

export const setComments = (payload, id) => ({ type: SET_COMMENTS, payload, id });
export const fetchComments = (id) => ({
  type: FETCH_COMMENTS,
  id,
});

export const requestCommentsError = (payload) => ({
  type: REQUESTED_COMMENTS_FAILED,
  payload,
})
