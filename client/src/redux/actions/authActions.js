import axios from "axios";

import {
  SET_LOADING,
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  UPDATE_PASSWORD,
  UPDATE_PROFILE,
  LOGOUT,
  AUTH_ERROR,
  CLEAR_ERRORS,
} from "../types";

import setAuthToken from "../../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    dispatch({
      type: AUTH_ERROR,
    });
    return;
  }
  dispatch(setLoading());

  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response?.data,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch(setLoading());

    const res = await axios.post("/api/auth/register", formData, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response?.data,
    });
  }
};

// Login user
export const login = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch(setLoading());

    const res = await axios.post("/api/auth/login", formData, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response?.data,
    });
  }
};

// Update password
export const updatePassword = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch(setLoading());
    const res = await axios.put("/api/auth", formData, config);

    dispatch({ type: UPDATE_PASSWORD, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
      payload: error.response?.data,
    });
  }
};

// Update profile
export const updateProfile = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch(setLoading());
    const res = await axios.put("/api/auth/edit", formData, config);

    dispatch({ type: UPDATE_PROFILE, payload: res.data });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error.response?.data,
    });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// Set loading to true
export const setLoading = () => {
  return { type: SET_LOADING };
};

// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
