import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { RootState } from '../../store/reducers';
import { sendMessage } from '../../store/actions';

const Container = styled.div`
  display: flex;
  padding: 10px;
  background-color: ${(props) => props.theme.color.white};
`;

const InputField = styled(Input)`
  flex: 1;
  margin-right: 10px;
`;

const SendMessageButton = styled(Button)`
  width: 100px;
  margin-left: 20px;
`;

const MessageInput: React.FC = () => {
  const [messageText, setMessageText] = useState('');
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.app.username);

  const handleSendMessage = () => {
    if (messageText.trim() !== '') {
      dispatch(
        sendMessage({
          name: currentUser,
          text: messageText,
        })
      );
      setMessageText('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Container>
      <InputField
        type="text"
        placeholder="Type your message..."
        value={messageText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <SendMessageButton onClick={handleSendMessage}>Send</SendMessageButton>
    </Container>
  );
};

export default MessageInput;
