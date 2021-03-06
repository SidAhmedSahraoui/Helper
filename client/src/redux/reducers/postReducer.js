import {
  ADD_POST,
  DELETE_POST,
  ADD_POST_ERROR,
  GET_POSTS,
  GET_POST_BY_ID,
  POSTS_ERROR,
  SET_LOADING_ADD_POST,
  SET_LOADING_POSTS,
  GET_USER_POSTS,
  USER_POSTS_ERROR,
  SET_LOADING_USER_POSTS,
  CLEAR_ERRORS,
} from "../types";

const initialState = {
  posts: null,
  post: null,
  user_posts: null,
  user_post: null,
  loading: false,
  loading_add_post: false,
  loading_user_posts: false,
  error: null,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        ...action.payload,
        loading_add_post: false,
      };
    case DELETE_POST:
      return {
        ...state,
        error:action.payload,
        loading: false,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case GET_POST_BY_ID:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };

    case GET_USER_POSTS:
      return {
        ...state,
        user_posts: action.payload,
        loading_user_posts: false,
      };

    case SET_LOADING_ADD_POST:
      return {
        ...state,
        loading_add_post: true,
      };

    case SET_LOADING_POSTS:
      return {
        ...state,
        loading: true,
      };

    case SET_LOADING_USER_POSTS:
      return {
        ...state,
        loading_user_posts: true,
      };

    case POSTS_ERROR:
    case USER_POSTS_ERROR:
    case ADD_POST_ERROR:
      return {
        ...state,
        loading: false,
        loading_add_post: false,
        loading_user_posts: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
