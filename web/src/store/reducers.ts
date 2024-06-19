import {
  DELETE_MESSAGE,
  EDIT_MESSAGE,
  FETCH_MESSAGES,
  LOGIN,
  LOGOUT,
  SEND_MESSAGE,
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
    case SEND_MESSAGE:
      if (action.payload && action.payload.success) {
        return {
          ...state,
          messages: [...state.messages, action.payload.message],
          error: null,
        };
      } else if (action.payload && action.payload.error) {
        return {
          ...state,
          error: action.payload.error,
        };
      }
      return state;

    case EDIT_MESSAGE:
      if (action.payload && action.payload.success) {
        const editedMessage = action.payload.message;
        const updatedMessages = state.messages.map((msg) =>
          msg.id === editedMessage.id ? editedMessage : msg
        );
        return {
          ...state,
          messages: updatedMessages,
          error: null,
        };
      } else if (action.payload && action.payload.error) {
        return {
          ...state,
          error: action.payload.error,
        };
      }
      return state;

    case DELETE_MESSAGE:
      if (action.payload && action.payload.success) {
        const deletedMessageId = action.payload.id;
        const updatedMessages = state.messages.filter(
          (msg) => msg.id !== deletedMessageId
        );
        return {
          ...state,
          messages: updatedMessages,
          error: null,
        };
      } else if (action.payload && action.payload.error) {
        return {
          ...state,
          error: action.payload.error,
        };
      }
      return state;
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
