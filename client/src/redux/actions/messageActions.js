import axios from 'axios';

import {
  SEND_MESSAGE,
  GET_MESSAGES,
  GET_MESSAGE_BY_ID,
  MESSAGES_ERROR,
  SET_LOADING_SEND_MESSAGE,
  SET_LOADING_MESSAGES,
  CLEAR_ERRORS,
    } from '../types'

// Get messages
export const getMessages = (username) => async (dispatch) => {
  try {
    dispatch(setLoadingMessages())
    const res = await axios.get(`/api/messages/${username}`);

    dispatch({ type: GET_MESSAGES, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: MESSAGES_ERROR,
      payload: error.response?.data?.msg || 'Error',
    });
  }
};

// Get message by Id
export const getMessageById = (id) => async (dispatch) => {
  try {
    dispatch(setLoadingMessages())
    const res = await axios.get(`/api/messages/find/${id}`);

    dispatch({ type: GET_MESSAGE_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: MESSAGES_ERROR,
      payload: error.response?.data?.msg || 'Error',
    });
  }
};

// Send message
export const sendMessage = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch(setLoadinSendMessages())
    const res = await axios.post('/api/messages', formData, config);

    dispatch({ type: SEND_MESSAGE, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: MESSAGES_ERROR,
      payload: error.response?.data?.msg || 'Error',
    });
  }
};

// Set loading to true
export const setLoadingMessages = () => {
  return { type : SET_LOADING_MESSAGES}
}

// Set loading send messages to true
export const setLoadinSendMessages = () => {
  return { type : SET_LOADING_SEND_MESSAGE}
}
// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
