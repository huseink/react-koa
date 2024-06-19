import React from 'react';
import './App.css';
import { Theme, ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import LoginPage from './components/pages/LoginPage';
import { useSelector } from 'react-redux';
import { RootState } from './store/reducer.interfaces';
import ChatPage from './components/pages/ChatPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faTrash);

const theme: Theme = {
  color: {
    white: '#FCFDFD',
    black: '#000000',
    gray: '#F1F1F1',
    grayDarken: '#999999',
    primary: '#615EF0',
    primaryDarken: '#4b49bf',
    success: '#38A169',
    error: '#C10043',
  },
};

const Container = styled.div`
  height: 100%;
  overflow: auto;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.white};
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
