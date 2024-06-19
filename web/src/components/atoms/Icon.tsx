import React from 'react';
import styled from '@emotion/styled';

const StyledIcon = styled.i`
  font-size: 20px;
  color: #007bff;
`;

interface IconProps {
  className: string;
}

const Icon: React.FC<IconProps> = ({ className }) => {
  return <StyledIcon className={className} />;
};

export default Icon;