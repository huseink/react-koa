import React from 'react';
import styled from '@emotion/styled';

const InputWrapper = styled.div<{ margin?: string }>`
  width: 100%;
  margin: ${(props) => props.margin || '0'};
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Error = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 12px;
`;

interface InputProps {
  type: string;
  placeholder: string;
  value?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  margin?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  margin,
  value,
  onChange,
  onKeyDown,
  error,
}) => {
  return (
    <InputWrapper margin={margin}>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
};

export default Input;
