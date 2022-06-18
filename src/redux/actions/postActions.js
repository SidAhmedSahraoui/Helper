import axios from 'axios'

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

// Add Post
export const addPost = (formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
  
      const res = await axios.post('/posts', formData, config);
  
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ADD_POST_ERROR,
        payload: error.response?.data?.msg,
      });
    }
  };
  
  // Get  Posts
  export const getPosts = () => async (dispatch) => {
    try {
      const res = await axios.get('/posts');
  
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: POST_ERROR,
        payload: error.response?.data?.msg,
      });
    }
  };
  
  // Get Post By Id
  export const getPostById = (id) => async (dispatch) => {
    try {  
      const res = await axios.get(`/posts/${id}`);
  
      dispatch({ type: GET_POST_BY_ID, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: POST_ERROR,
        payload: error.response?.data?.msg,
      });
    }
  };
  
  // Get User Posts
  export const getUserPosts = (username) => async (dispatch) => {
    try {  
      const res = await axios.get(`/posts/user/${username}`);
  
      dispatch({ type: GET_USER_POSTS, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: USER_POSTS_ERROR,
        payload: error.response?.data?.msg,
      });
    }
  };
  
  // Get User Post by id
  export const getUserPostById = (username,id) => async (dispatch) => {
    try {  
      const res = await axios.get(`/posts/user/${username}/${id}`);
  
      dispatch({ type: GET_USER_POST_BY_ID, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: USER_POSTS_ERROR,
        payload: error.response?.data?.msg,
      });
    }
  };
  // Clear errors
  export const clearErrors = () => {
    return { type: CLEAR_ERRORS };
  };
  