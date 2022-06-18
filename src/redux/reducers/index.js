import { combineReducers } from "redux";

import authReducer from './authReducer';
import conversationReducer from './conversationReducer';
import postReducer from './postReducer';

export default combineReducers({
    auth : authReducer,
    conversation : conversationReducer,
    post : postReducer,
})