import axios from 'axios';
import { Message } from './reducers';

const BASE_API_URL = 'http://localhost:3001';

export const fetchMessagesApi = async (): Promise<Message[]> => {
  try {
    const response = await axios.get(`${BASE_API_URL}/comments`);
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const sendMessageApi = async (message: Message): Promise<Message> => {
  try {
    const response = await axios.post(`${BASE_API_URL}/comments`, message);
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const editMessageApi = async (
  id: string,
  user: string,
  newText: string
): Promise<Message> => {
  try {
    const response = await axios.put(`${BASE_API_URL}/comment/${id}`, {
      text: newText,
      name: user,
    });
    return response.data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const deleteMessageApi = async (id: string): Promise<string> => {
  try {
    await axios.delete(`${BASE_API_URL}/comment/${id}`);
    return id;
  } catch (error) {
    throw new Error(error as string);
  }
};
