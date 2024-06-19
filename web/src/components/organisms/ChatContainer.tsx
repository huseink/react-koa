import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import MessageBubble from '../molecules/MessageBubble';
import { RootState } from '../../store/reducer.interfaces';
import { deleteMessage, editMessage, fetchMessages } from '../../store/actions';
import LoadingIndicator from '../molecules/LoadingIndicator';

const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-right: 20px;
  position: relative;
`;

const ChatContainer: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.app.username);
  const messages = useSelector((state: RootState) => state.message.messages);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const prevMessagesLengthRef = useRef<number>(messages.length);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (messages.length > prevMessagesLengthRef.current) {
      scrollToBottom();
    }
    prevMessagesLengthRef.current = messages.length;
  }, [messages]);

  const handleDeleteMessage = (id: string) => {
    dispatch(deleteMessage(id));
  };

  const handleEditMessage = (id: string, newText: string) => {
    dispatch(editMessage(id, currentUser, newText));
  };

  return (
    <Container>
      {messages.length === 0 ? (
        <LoadingIndicator />
      ) : (
        <>
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              currentUser={currentUser!}
              onDelete={handleDeleteMessage}
              onEdit={handleEditMessage}
            />
          ))}
          <div ref={messagesEndRef} />
        </>
      )}
    </Container>
  );
};

export default ChatContainer;
