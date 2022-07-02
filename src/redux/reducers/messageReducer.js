import {
  SEND_MESSAGE,
  SEND_MESSAGE_ERROR,
  SET_LOADING_SEND_MESSAGE,
  GET_MESSAGES,
  MESSAGES_ERROR,
  SET_LOADING_MESSAGES,
  GET_MESSAGE_BY_ID,
  CLEAR_ERRORS,
} from "../types";

const initialState = {
  message: null,
  messages: null,
  loading: false,
  loading_send: false,
  error: null,
  error_send: null,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        error_send: false,
        loading_send: false,
      };
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };
    case GET_MESSAGE_BY_ID:
      return {
        ...state,
        message: action.payload,
        loading: false,
      };
    case MESSAGES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SEND_MESSAGE_ERROR:
      return {
        ...state,
        error_send: action.payload,
        loading_send: false,
      };
    case SET_LOADING_MESSAGES:
      return {
        ...state,
        loading: true,
      };
    case SET_LOADING_SEND_MESSAGE:
      return {
        ...state,
        loading_send: true,
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
