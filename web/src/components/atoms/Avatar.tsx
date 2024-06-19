import React from 'react';
import styled from '@emotion/styled';

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

interface AvatarProps {
  imageUrl: string;
  altText: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText }) => {
  return <Image src={imageUrl} alt={altText} />;
};

export default Avatar;
