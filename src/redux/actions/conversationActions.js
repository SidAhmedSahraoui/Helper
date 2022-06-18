import axios from 'axios';

import {
    SEND_MESSAGE,
    GET_CONVERSATIONS,
    GET_CONVERSATION_BY_ID,
    SEND_MESSAGE_ERROR,
    MESSAGE_ERROR,
    CLEAR_ERRORS,
    } from '../types'

// Get conversations
export const getConversations = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/conversations/${id}`);

    dispatch({ type: GET_CONVERSATIONS, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: MESSAGE_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Get conversation by Id
export const getConversationById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/conversation/${id}`);

    dispatch({ type: GET_CONVERSATION_BY_ID, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: MESSAGE_ERROR,
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
    const res = await axios.post('/conversations', formData, config);

    dispatch({ type: SEND_MESSAGE, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SEND_MESSAGE_ERROR,
      payload: error.response?.data?.msg,
    });
  }
};

// Clear errors
export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
