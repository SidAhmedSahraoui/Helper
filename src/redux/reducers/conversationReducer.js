import {
SEND_MESSAGE,
GET_CONVERSATIONS,
GET_CONVERSATION_BY_ID,
SEND_MESSAGE_ERROR,
MESSAGE_ERROR,
CLEAR_ERRORS,
} from '../types'

const initialState = {
    conversation : null ,
    conversations : null ,
    loading : false ,
    loading_send : false ,
    error : null , 
    error_send : null
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
      case SEND_MESSAGE:
        return {
          ...state,
          error_send: false,
          loading_send: false,
        };
      case GET_CONVERSATIONS:
        return {
          ...state,
          conversations: action.payload,
          loading: false,
        };
      case GET_CONVERSATION_BY_ID:
        return {
          ...state,
          conversation_current: action.payload,
          loading: false,
        };
      case MESSAGE_ERROR:
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
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  