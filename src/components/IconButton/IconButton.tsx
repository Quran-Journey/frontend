import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';

/**
 * Props for the IconButton component.
 *
 * @param {React.ReactNode} icon - The icon to be displayed inside the button.
 * @param {string} [colour] - Color of the button (optional, defaults to lightGreen from colours).
 * @param {'small' | 'medium' | 'large'} [size] - Size of the button (optional, defaults to medium).
 * @param {boolean} [isWhiteOnHover] - Optional boolean indicating if the label should be white on hover.
 */
interface IconButtonProps {
  icon: React.ReactNode;
  colour?: string;
  size?: 'small' | 'medium' | 'large';
  isWhiteOnHover?: boolean;
}

/**
 * Styled component for the IconButton.
 */
const IconButtonDiv = styled.div<IconButtonProps>`
  border-radius: 50%;
  background: ${(props) =>
    props.isWhiteOnHover ? colours.white : props.colour};
  display: inline-block;
  align-items: center;

  color: ${colours.black};

  cursor: pointer;

  ${(props) => {
    switch (props.size) {
      case 'small':
        return SMALL;
      case 'medium':
        return MEDIUM;
      case 'large':
        return LARGE;
      default:
        return MEDIUM;
    }
  }}
`;

// Styled CSS block for a small icon button.
const SMALL = css`
  width: 17px;
  height: auto;
  padding: 0 2px 1px 2px;

  @media (${breakpoints.sm}) {
    width: 15px;
  }

  @media (${breakpoints.xs}) {
    width: 13px;
    padding: 0 2px;
  }
`;

// Styled CSS block for a medium icon button.
const MEDIUM = css`
  width: 20px;
  height: auto;
  padding: 1px 1px;

  @media (${breakpoints.sm}) {
    width: 17px;
    padding: 1px 2px;
  }

  @media (${breakpoints.xs}) {
    width: 15px;
    padding: 0 2px 1px 2px;
  }
`;

// Styled CSS block for a large icon button.
const LARGE = css`
  width: 25px;
  height: auto;
  padding: 1px 1px;

  @media (${breakpoints.sm}) {
    width: 23px;
  }

  @media (${breakpoints.xs}) {
    width: 19px;
    padding: 1px 1.5px;
  }
`;

/**
 * IconButton component that renders the styled IconButtonDiv.
 *
 * @param {React.ReactNode} icon - The icon to be displayed inside the button.
 * @param {string} colour - Color of the button (optional, defaults to lightGreen from colours).
 * @param {'small' | 'medium' | 'large'} [size] - Size of the button (optional, defaults to medium).
 */
export const IconButton = ({
  icon,
  colour = colours.lightGreen,
  size = 'medium',
  isWhiteOnHover = false,
}: IconButtonProps) => {
  return (
    <IconButtonDiv
      icon={icon}
      colour={colour}
      size={size}
      isWhiteOnHover={isWhiteOnHover}
    >
      {icon}
    </IconButtonDiv>
  );
};
