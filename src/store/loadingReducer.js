import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  loading: "false",
};

export const LOADING_POSTS = "LOADING_POSTS";
export const LOADED_POSTS = "LOADED_POSTS";

const loading = (state = initialState, payload) => {
  switch (payload.type) {
    case LOADING_POSTS:
      return {
        ...state,
        loading: 'true',
      };
    case LOADED_POSTS:
      return {
        ...state,
        loading: 'false',
      };
    default:
      return state;
  }
};

export default loading;

//export const setLoading = (payload) => ({ type: LOADING_POSTS, payload});
//export const setLoaded = (payload) => ({ type: LOADED_POSTS, payload});
