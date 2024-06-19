import React from 'react';
import styled from '@emotion/styled';
import ChatMessageList from '../organisms/ChatContainer';
import MessageInput from '../molecules/MessageInput';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75%;
  background-color: ${(props) => props.theme.color.white};
  min-width: 500px !important;
  height: 100vh;
  margin: 0 auto;
  -webkit-box-shadow: 1px 2px 16px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 2px 16px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 2px 16px -6px rgba(0, 0, 0, 0.75);
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.white};
  padding: 20px;
`;

const ChatPage: React.FC = () => {
  return (
    <PageContainer>
      <ChatContainer>
        <ChatMessageList />
      </ChatContainer>
      <MessageInput />
    </PageContainer>
  );
};

export default ChatPage;
