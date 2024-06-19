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

export interface RootState {
  app: AppState;
  message: MessagesState;
}
