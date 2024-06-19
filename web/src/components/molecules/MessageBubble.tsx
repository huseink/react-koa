import React from 'react';
import styled from '@emotion/styled';
import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import { Message } from '../../store/reducer.interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Body1, Body2 } from '../atoms/Typography';

interface MessageBubbleProps {
  message: Message;
  currentUser: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Bubble = styled.div<{ isCurrentUser: boolean }>`
  background-color: ${(props) =>
    props.isCurrentUser ? props.theme.color.primary : props.theme.color.gray};

  border-radius: 8px;
  padding: 10px;
  min-width: 35%;

  align-self: ${(props) => (props.isCurrentUser ? 'flex-end' : 'flex-start')};
`;

const BubbleHeader = styled.div<{ isCurrentUser: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  flex-direction: ${(props) => (props.isCurrentUser ? 'row-reverse' : 'row')};
`;

const Username = styled(Body1)<{ isCurrentUser: boolean }>`
  font-weight: bold;
  color: ${(props) =>
    props.isCurrentUser ? props.theme.color.white : props.theme.color.black};
`;

const Timestamp = styled(Body2)<{ isCurrentUser: boolean }>`
  font-size: 12px;
  color: ${(props) =>
    props.isCurrentUser
      ? props.theme.color.white
      : props.theme.color.grayDarken};
`;

const MessageText = styled(Body1)<{ isCurrentUser: boolean }>`
  margin: 0;
  color: ${(props) =>
    props.isCurrentUser ? props.theme.color.white : props.theme.color.black};
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5px;
`;

const ActionButton = styled(Button)`
  margin-left: 10px;
  padding: 2px 5px;
  background: ${(props) => props.theme.color.primary};
  &:hover {
    background: ${(props) => props.theme.color.primaryDarken};
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

  const avatarUrl = `https://i.pravatar.cc/300?u=${message.id}`;

  return (
    <BubbleContainer>
      <Bubble isCurrentUser={isCurrentUser}>
        <BubbleHeader isCurrentUser={isCurrentUser}>
          <BubbleHeaderUser>
            <Avatar altText="avatar" imageUrl={avatarUrl}></Avatar>
            <Username isCurrentUser={isCurrentUser}>{message.name}</Username>
          </BubbleHeaderUser>
          <Timestamp isCurrentUser={isCurrentUser}>
            {formattedTimestamp}
          </Timestamp>
        </BubbleHeader>
        <MessageText isCurrentUser={isCurrentUser}>{message.text}</MessageText>
        {isCurrentUser && (
          <ActionButtons>
            <ActionButton onClick={handleEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </ActionButton>
            <ActionButton onClick={handleDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </ActionButton>
          </ActionButtons>
        )}
      </Bubble>
    </BubbleContainer>
  );
};

export default MessageBubble;
