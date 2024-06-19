import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Body1, Header1, Header2 } from '../atoms/Typography';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions';

const FormContainer = styled.div`
  background-color: ${(props) => props.theme.color.white};
  max-width: 50%;
  min-width: 500px !important;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  -webkit-box-shadow: 1px 2px 16px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 2px 16px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 2px 16px -6px rgba(0, 0, 0, 0.75);
`;

const FormSideWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const WelcomeInformation = styled.div`
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.color.primaryDarken} 0%,
    ${(props) => props.theme.color.primary} 100%
  );
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  color: ${(props) => props.theme.color.white};
`;

const SigninButton = styled(Button)`
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  margin: 10px 0;
`;

const WelcomeBody = styled(Body1)`
  margin: 20px 0;
`;

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSignIn = () => {
    if (!username || username.length < 3) {
      setError('Name must be greater than 2 characters.');
    } else {
      dispatch(login(username));
      setError('');
    }
  };

  return (
    <FormContainer>
      <FormSideWrapper>
        <Header1>Chatify</Header1>
        <Input
          type="text"
          placeholder="Your name"
          onChange={(e) => setUsername(e.target.value)}
          margin="20px 0"
          error={error}
        />
        <SigninButton onClick={handleSignIn}>Sign in</SigninButton>
      </FormSideWrapper>
      <WelcomeInformation>
        <Header1>Welcome!</Header1>
        <Header2>We're thrilled to have you join us.</Header2>
        <WelcomeBody>
          Please tell us your name and let's start chatting! Connect with new
          friends, share your thoughts, and stay updated with the latest
          conversations.
        </WelcomeBody>
      </WelcomeInformation>
    </FormContainer>
  );
};

export default LoginPage;
