import {
ADD_POST,
GET_POSTS,
GET_POST_BY_ID,
ADD_POST_ERROR,
POST_ERROR,
GET_USER_POSTS,
GET_USER_POST_BY_ID,
USER_POSTS_ERROR,
CLEAR_ERRORS,
} from '../types';

const initialState = {
    posts : null ,
    post : null ,
    user_posts : null , 
    user_post : null , 
    loading : false , 
    loading_add_post : false ,
    loading_user_posts : false ,
    error : null ,
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState , action) => {
    switch (action.type) {
        case ADD_POST:
          return {
            ...state,
            loading_add_post: false,
          };
        
        case GET_POSTS: 
          return {
            ...state,
            posts: action.payload,
            loading: false,
          }
    
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
    
        case GET_USER_POST_BY_ID:
          return {
            ...state,
            user_post: action.payload,
            loading_user_posts: false,
          };
    
        case ADD_POST_ERROR:
          return {
            ...state,
            loading_add_post: false,
            error: action.payload,
          };
    
        case POST_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
    
        case USER_POSTS_ERROR:
          return {
            ...state,
            loading_user_posts: false,
            error: action.payload,
          };
    
        case CLEAR_ERRORS:
          return {
            ...state,
            error: null,
            error_pending_posts: null,
          };
    
        default:
          return state;
      }
}