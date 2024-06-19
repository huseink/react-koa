import React from 'react';
import styled from '@emotion/styled';
import { Body1 } from '../atoms/Typography';

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const LdsEllipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33.33333px;
    width: 13.33333px;
    height: 13.33333px;
    border-radius: 50%;
    background: currentColor;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }

    &:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    &:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    &:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

const ProgressText = styled(Body1)`
  font-size: 16px;
  margin-top: 10px;
`;

const LoadingIndicator: React.FC = () => {
  return (
    <Container>
      <LdsEllipsis>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LdsEllipsis>
      <ProgressText>Loading messages...</ProgressText>
    </Container>
  );
};

export default LoadingIndicator;
