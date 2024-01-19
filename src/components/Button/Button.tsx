import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';

import '@fontsource/open-sans/400.css';

/**
 * Props for button component with optional icons.
 *
 * @param onClick - Function to handle button click.
 * @param children - Content inside the button.
 * @param disabled - Boolean indicating whether the button is disabled.
 * @param startIcon - Optional icon to display before the button text.
 * @param endIcon - Optional icon to display after the button text.
 * @param selected - Boolean indicating whether the button is in a selected state.
 */
interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  selected?: boolean;
}

/**
 * Styled button component with customizable styles.
 */
const ButtonDiv = styled.button<ButtonProps>`
  all: unset;

  color: ${colours.white};
  font-family: General Sans, Open Sans, sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;

  display: inline-flex;
  padding: 8px 15px;
  align-items: center;
  gap: 8px;

  border-radius: 30px;
  border-bottom: 3px solid ${colours.forestGreen};
  outline: inherit;
  background: ${colours.emrald};

  cursor: pointer;

  transition: background 0.5s ease, border-bottom 0.5s ease;

  &:hover {
    border-bottom: 3px solid ${colours.darkGreen};
    background: ${colours.forestGreen};
  }

  &:active {
    border-bottom: none;
    background: ${colours.forestGreen};
  }

  @media (${breakpoints.sm}) {
    font-size: 13px;
    line-height: normal;

    padding: 5px 12px;
  }

  @media (${breakpoints.xs}) {
    font-size: 10px;
    line-height: normal;

    padding: 3px 8px;
  }

  ${(props) => props.disabled && DISABLED}
  ${(props) => props.selected && SELECTED}
`;

/**
 * CSS for disabled state.
 */
const DISABLED = css`
  color: ${colours.grey};
  background: ${colours.lightGrey};
  border: none;

  cursor: default;

  &:hover {
    border: none;
    background: ${colours.lightGrey};
  }

  &:active {
    border: none;
    background: ${colours.lightGrey};
  }
`;

/**
 * CSS for selected state.
 */
const SELECTED = css`
  border-bottom: none;
  background: ${colours.forestGreen};

  &:hover {
    border: none;
  }
`;

/**
 * Styled wrapper for icons inside the button.
 */
const IconWrapper = styled.span`
  color: inherit;
  width: 18px;
`;

/**
 * Button component that can include optional icons.
 *
 * @param onClick - Function to handle button click.
 * @param children - Content inside the button.
 * @param disabled - Boolean indicating whether the button is disabled.
 * @param selected - Boolean indicating whether the button is in a selected state.
 * @param startIcon - Optional icon to display before the button text.
 * @param endIcon - Optional icon to display after the button text.
 */
export const Button = ({
  onClick,
  children,
  disabled = false,
  selected = false,
  startIcon,
  endIcon,
}: ButtonProps) => {
  return (
    <ButtonDiv
      onClick={onClick}
      disabled={disabled}
      selected={selected}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {startIcon && <IconWrapper>{startIcon}</IconWrapper>}
      {children}
      {endIcon && <IconWrapper>{endIcon}</IconWrapper>}
    </ButtonDiv>
  );
};
