import {
  all,
  call,
  put,
  race,
  take,
  delay,
  takeEvery,
} from 'redux-saga/effects';
import {
  FETCH_MESSAGES,
  STOP_FETCH_MESSAGES,
  SEND_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
} from './ActionTypes';
import {
  fetchMessagesSuccess,
  fetchMessagesFailure,
  sendMessageSuccess,
  sendMessageFailure,
  editMessageSuccess,
  editMessageFailure,
  deleteMessageSuccess,
  deleteMessageFailure,
} from './actions';
import { Message } from './reducers';
import {
  fetchMessagesApi,
  sendMessageApi,
  editMessageApi,
  deleteMessageApi,
} from './api';

const POLLING_INTERVAL = 2000;

function* fetchMessages(): Generator<any, void, Message[]> {
  try {
    while (true) {
      const response: Message[] = yield call(fetchMessagesApi);
      yield put(fetchMessagesSuccess(response));
      yield delay(POLLING_INTERVAL);
    }
  } catch (error) {
    yield put(fetchMessagesFailure(error as string));
  }
}

function* sendMessage(action: { type: string; payload: { message: Message } }) {
  try {
    const { message } = action.payload;
    const sentMessage: Message = yield call(sendMessageApi, message);
    yield put(sendMessageSuccess(sentMessage));
  } catch (error) {
    yield put(sendMessageFailure(error as string));
  }
}

function* editMessage(action: {
  type: string;
  payload: { id: string; user: string; newText: string };
}) {
  try {
    const { id, newText, user } = action.payload;
    const editedMessage: Message = yield call(
      editMessageApi,
      id,
      user,
      newText
    );
    yield put(editMessageSuccess(editedMessage));
  } catch (error) {
    yield put(editMessageFailure(error as string));
  }
}

function* deleteMessage(action: { type: string; payload: { id: string } }) {
  try {
    const { id } = action.payload;
    yield call(deleteMessageApi, id);
    yield put(deleteMessageSuccess(id));
  } catch (error) {
    yield put(deleteMessageFailure(error as string));
  }
}

function* watchFetchMessages() {
  while (true) {
    yield take(FETCH_MESSAGES);

    while (true) {
      yield race({
        fetch: call(fetchMessages),
        cancel: take(STOP_FETCH_MESSAGES),
        interval: delay(POLLING_INTERVAL),
      });
    }
  }
}

function* watchSendMessage() {
  yield takeEvery(SEND_MESSAGE, sendMessage);
}

function* watchEditMessage() {
  yield takeEvery(EDIT_MESSAGE, editMessage);
}

function* watchDeleteMessage() {
  yield takeEvery(DELETE_MESSAGE, deleteMessage);
}

// Root Saga
export default function* messagesSaga() {
  yield all([
    watchFetchMessages(),
    watchSendMessage(),
    watchEditMessage(),
    watchDeleteMessage(),
  ]);
}
