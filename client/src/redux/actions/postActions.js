import axios from "axios";

import {
  ADD_POST,
  ADD_POST_ERROR,
  GET_POSTS,
  GET_POST_BY_ID,
  POSTS_ERROR,
  SET_LOADING_ADD_POST,
  SET_LOADING_POSTS,
  GET_USER_POSTS,
  GET_USER_POST_BY_ID,
  USER_POSTS_ERROR,
  SET_LOADING_USER_POSTS,
  DELETE_POST,
  DELETE_POST_ERROR,
  SET_LOADING_DELETE_POST,
  CLEAR_ERRORS,
} from "../types";

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
    console.log(error);
    dispatch({
      type: POSTS_ERROR,
      payload: error.response?.data || "Error",
    });
  }
};

// Get Post By Id
export const getPostById = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingPosts());
    const res = await axios.get(`/posts/${id}`);

    dispatch({ type: GET_POST_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POSTS_ERROR,
      payload: error.response?.data || "Error",
    });
  }
};

// Get User Posts
export const getUserPosts = (username) => async (dispatch) => {
  try {
    dispatch(setLoadingUserPosts());
    const res = await axios.get(`/posts/user/${username}`);

    dispatch({ type: GET_USER_POSTS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_POSTS_ERROR,
      payload: error.response?.data || "Error",
    });
  }
};

// Get User Post by id
export const getUserPostById = (username, id) => async (dispatch) => {
  try {
    dispatch(setLoadingUserPosts());
    const res = await axios.get(`/posts/user/${username}/${id}`);

    dispatch({ type: GET_USER_POST_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_POSTS_ERROR,
      payload: error.response?.data || "Error",
    });
  }
};

// delete User Post by id
export const deletePostById = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingDeletePost());
    const res = await axios.delete(`/posts/user/${id}`);

    dispatch({ type: DELETE_POST, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_POST_ERROR,
      payload: error.response?.data || "Error",
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

// Set loading delete post to true
export const setLoadingDeletePost = () => {
  return { type: SET_LOADING_DELETE_POST };
};
// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
