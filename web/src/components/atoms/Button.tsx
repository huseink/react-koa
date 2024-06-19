import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 10px 20px;
  background: ${(props) => props.theme.color.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.color.primaryDarken};
  }
`;

interface ButtonProps {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
