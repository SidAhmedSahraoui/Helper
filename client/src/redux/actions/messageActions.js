import axios from "axios";

import {
  SEND_MESSAGE,
  GET_MESSAGES,
  MESSAGES_ERROR,
  SET_LOADING_SEND_MESSAGE,
  SET_LOADING_MESSAGES,
  CLEAR_ERRORS,
} from "../types";

import setAuthToken from "../../utils/setAuthToken";

// Get messages
export const getMessages = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    dispatch({
      type: MESSAGES_ERROR,
    });
    return;
  }
  try {
    dispatch(setLoadingMessages());
    const res = await axios.get("/api/messages");

    dispatch({ type: GET_MESSAGES, payload: res.data });
  } catch (error) {
    dispatch({
      type: MESSAGES_ERROR,
      payload: error.response?.data,
    });
  }
};

// Send message
export const sendMessage = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    dispatch({
      type: MESSAGES_ERROR,
    });
    return;
  }

  try {
    dispatch(setLoadinSendMessages());
    const res = await axios.post("/api/messages", formData, config);

    dispatch({ type: SEND_MESSAGE, payload: res.data });
  } catch (error) {
    dispatch({
      type: MESSAGES_ERROR,
      payload: error.response?.data,
    });
  }
};

// Set loading to true
export const setLoadingMessages = () => {
  return { type: SET_LOADING_MESSAGES };
};

// Set loading send messages to true
export const setLoadinSendMessages = () => {
  return { type: SET_LOADING_SEND_MESSAGE };
};
// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
