import axios from "axios";

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

import setAuthToken from "../../utils/setAuthToken";

// Add Post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch(setLoadingAddPost());

    const res = await axios.post("/api/posts", formData, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_POST_ERROR,
      payload: error.response?.data,
    });
  }
};

// Delete Post
export const deletePost = (id) => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    dispatch({
      type: POSTS_ERROR,
    });
    return;
  }
  try {
    dispatch(setLoadingPosts());

    const res = await axios.delete("/api/posts/" + id);

    dispatch({
      type: DELETE_POST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response?.data,
    });
  }
};
// Get  Posts
export const getPosts = () => async (dispatch) => {
  try {
    dispatch(setLoadingPosts());
    const res = await axios.get("/api/posts");

    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response?.data,
    });
  }
};

// Get Post By Id
export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingPosts());
    const res = await axios.get(`/api/posts/${id}`);

    dispatch({ type: GET_POST_BY_ID, payload: res.data });
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: error.response?.data,
    });
  }
};

// Get User Posts
export const getUserPosts = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    dispatch({
      type: POSTS_ERROR,
    });
    return;
  }
  try {
    dispatch(setLoadingUserPosts());
    const res = await axios.get("/api/posts/user");

    dispatch({ type: GET_USER_POSTS, payload: res.data });
  } catch (error) {
    dispatch({
      type: USER_POSTS_ERROR,
      payload: error.response?.data,
    });
  }
};

// Set loading to true
export const setLoadingPosts = () => {
  return { type: SET_LOADING_POSTS };
};

// Set loading user posts to true
export const setLoadingUserPosts = () => {
  return { type: SET_LOADING_USER_POSTS };
};

// Set loading add post to true
export const setLoadingAddPost = () => {
  return { type: SET_LOADING_ADD_POST };
};

// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
