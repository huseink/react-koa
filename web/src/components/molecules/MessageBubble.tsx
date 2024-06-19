import React from 'react';
import styled from '@emotion/styled';
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import { Message } from '../../store/reducers';

interface MessageBubbleProps {
  message: Message;
  currentUser: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Bubble = styled.div<{ isCurrentUser: boolean }>`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 10px;
  min-width: 50%;

  align-self: ${(props) => (props.isCurrentUser ? 'flex-end' : 'flex-start')};
`;

const BubbleHeader = styled.div<{ isCurrentUser: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  flex-direction: ${(props) => (props.isCurrentUser ? 'row-reverse' : 'row')};
`;

const Username = styled.span`
  font-weight: bold;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: #888;
`;

const MessageText = styled.p`
  margin: 0;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;

const ActionButton = styled(Button)`
  margin-left: 10px;
  padding: 5px 10px;
  background: ${(props) => props.theme.color.error};
  &:hover {
    background: ${(props) => props.theme.color.error};
  }
`;

const BubbleHeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  currentUser,
  onDelete,
  onEdit,
}) => {
  const isCurrentUser = message.name === currentUser;

  const handleDelete = () => {
    onDelete(message.id);
  };

  const handleEdit = () => {
    const newText = prompt('Edit message:', message.text);
    if (newText !== null) {
      onEdit(message.id, newText);
    }
  };

  const formattedTimestamp = new Date(message.dateEdited).toLocaleString();

  return (
    <BubbleContainer>
      <Bubble isCurrentUser={isCurrentUser}>
        <BubbleHeader isCurrentUser={isCurrentUser}>
          <BubbleHeaderUser>
            <Avatar
              altText="avatar"
              imageUrl="https://i.pravatar.cc/300
"
            ></Avatar>
            <Username>{message.name}</Username>
          </BubbleHeaderUser>
          <Timestamp>{formattedTimestamp}</Timestamp>
        </BubbleHeader>
        <MessageText>{message.text}</MessageText>
        {isCurrentUser && (
          <ActionButtons>
            <ActionButton onClick={handleEdit}>Edit</ActionButton>
            <ActionButton onClick={handleDelete}>Delete</ActionButton>
          </ActionButtons>
        )}
      </Bubble>
    </BubbleContainer>
  );
};

export default MessageBubble;
