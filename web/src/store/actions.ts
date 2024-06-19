import {
  LOGIN,
  LOGOUT,
  FETCH_MESSAGES,
  SEND_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  STOP_FETCH_MESSAGES,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  EDIT_MESSAGE_SUCCESS,
  EDIT_MESSAGE_FAILURE,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAILURE,
} from './ActionTypes';
import { Message } from './reducer.interfaces';

export const login = (username: string) => ({
  type: LOGIN,
  payload: { username },
});

export const logout = () => ({
  type: LOGOUT,
});

export const fetchMessages = () => ({
  type: FETCH_MESSAGES,
});

export const stopFetchMessages = () => ({
  type: STOP_FETCH_MESSAGES,
});

export const fetchMessagesSuccess = (messages: Message[]) => ({
  type: FETCH_MESSAGES,
  payload: { success: true, messages },
});

export const fetchMessagesFailure = (error: string) => ({
  type: FETCH_MESSAGES,
  payload: { success: false, error },
});

export const sendMessage = (message: Message) => ({
  type: SEND_MESSAGE,
  payload: { message },
});

export const sendMessageSuccess = (message: Message) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: { success: true, message },
});

export const sendMessageFailure = (error: string) => ({
  type: SEND_MESSAGE_FAILURE,
  payload: { success: false, error },
});

export const editMessage = (id: string, user: string, newText: string) => ({
  type: EDIT_MESSAGE,
  payload: { id, user, newText },
});

export const editMessageSuccess = (message: Message) => ({
  type: EDIT_MESSAGE_SUCCESS,
  payload: { success: true, message },
});

export const editMessageFailure = (error: string) => ({
  type: EDIT_MESSAGE_FAILURE,
  payload: { success: false, error },
});

export const deleteMessage = (id: string) => ({
  type: DELETE_MESSAGE,
  payload: { id },
});

export const deleteMessageSuccess = (id: string) => ({
  type: DELETE_MESSAGE_SUCCESS,
  payload: { success: true, id },
});

export const deleteMessageFailure = (error: string) => ({
  type: DELETE_MESSAGE_FAILURE,
  payload: { success: false, error },
});
