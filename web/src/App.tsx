import React from 'react';
import './App.css';
import { Theme, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import LoginPage from './components/pages/LoginPage';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducers';
import ChatPage from './components/pages/ChatPage';

const theme: Theme = {
  color: {
    white: '#FCFDFD',
    black: '#000000',
    gray: '#F1F1F1',
    primary: '#615EF0',
    primaryDarken: '#4b49bf',
    success: '#38A169',
    error: '#C10043',
  },
};

const Container = styled.div`
  margin: 0 auto;
`;

const App: React.FC = () => {
  const loggedUser = useSelector((state: RootState) => state.app.username);

  let appContent;

  if (loggedUser) {
    appContent = <ChatPage />;
  } else {
    appContent = <LoginPage />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>{appContent}</Container>
    </ThemeProvider>
  );
};

export default App;
