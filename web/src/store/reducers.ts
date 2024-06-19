import {
  DELETE_MESSAGE_FAILURE,
  DELETE_MESSAGE_SUCCESS,
  EDIT_MESSAGE_FAILURE,
  EDIT_MESSAGE_SUCCESS,
  FETCH_MESSAGES,
  LOGIN,
  LOGOUT,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
} from './ActionTypes';
import { combineReducers } from 'redux';

export interface AppState {
  username: string | null;
}

export interface UsersState {
  [key: string]: boolean;
}

export interface Message {
  id?: string;
  name: string;
  text: string;
  dateAdded?: number;
  dateEdited?: number;
}

export interface MessagesState {
  messages: Message[];
  error?: string;
}

const initialAppState: AppState = {
  username: null,
};

const initialMessagesState: MessagesState = {
  messages: [],
};

export const appReducer = (state = initialAppState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, username: action.payload.username };
    case LOGOUT:
      return { ...state, username: null };
    default:
      return state;
  }
};

export const messagesReducer = (state = initialMessagesState, action: any) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      if (action.payload && action.payload.success) {
        return {
          ...state,
          messages: action.payload.messages,
          error: null,
        };
      } else if (action.payload && action.payload.error) {
        return {
          ...state,
          error: action.payload.error,
        };
      }
      return state;
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: [...state.messages, action.payload.message],
        error: null,
      };
    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case EDIT_MESSAGE_SUCCESS:
      const editedMessage = action.payload.message;
      const updatedMessages = state.messages.map((msg) =>
        msg.id === editedMessage.id ? editedMessage : msg
      );
      return {
        ...state,
        messages: updatedMessages,
        error: null,
      };
    case EDIT_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case DELETE_MESSAGE_SUCCESS:
      const deletedMessageId = action.payload.id;
      const filteredMessages = state.messages.filter(
        (msg) => msg.id !== deletedMessageId
      );
      return {
        ...state,
        messages: filteredMessages,
        error: null,
      };
    case DELETE_MESSAGE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export interface RootState {
  app: AppState;
  message: MessagesState;
}

const rootReducer = combineReducers({
  app: appReducer,
  message: messagesReducer,
});

export default rootReducer;
