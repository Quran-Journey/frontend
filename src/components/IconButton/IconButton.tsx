import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';

/**
 * Props for the IconButton component.
 *
 * @param icon - The icon to be displayed inside the button.
 * @param colour - Color of the button (optional, defaults to lightGreen from colours).
 */
interface IconButtonProps {
  icon: React.ReactNode;
  colour?: string;
}

/**
 * Styled component for the IconButton.
 */
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

  @media (${breakpoints.sm}) {
    width: 20px;
    height: auto;
  }

  @media (${breakpoints.xs}) {
    width: 15px;
    height: auto;
    padding: 0 2px 1px 2px;
  }
`;

/**
 * IconButton component that renders the styled IconButtonDiv.
 *
 * @param icon - The icon to be displayed inside the button.
 * @param colour - Color of the button (optional, defaults to lightGreen from colours).
 */
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
