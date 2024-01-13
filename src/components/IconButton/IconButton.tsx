import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';

interface IconButtonProps {
  icon: React.ReactNode;
  colour?: string;
}

const IconButtonDiv = styled.div<IconButtonProps>`
  border-radius: 50%;
  background: ${(props) => props.colour};
  display: inline-block;
  padding: 1px 1px;
  align-items: center;

  color: ${colours.black};
  width: 25px;
  height: auto;

  cursor: pointer;
`;

export const IconButton = ({
  icon,
  colour = colours.lightGreen,
}: IconButtonProps) => {
  return (
    <IconButtonDiv icon={icon} colour={colour}>
      {icon}
    </IconButtonDiv>
  );
};
