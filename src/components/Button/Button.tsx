import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours'

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  disabled?: boolean; // make the button disabled or not
  startIcon?: React.ReactNode; // new property for the start icon
  endIcon?: React.ReactElement;
  selected?: boolean;
}

const ButtonDiv = styled.button<ButtonProps>`
  all: unset;

  color: ${colours.white};
  font-family: General Sans;
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

const SELECTED = css`
  border-bottom: none;
  background: ${colours.forestGreen};

  &:hover {
    border: none;
  }
`;

const IconWrapper = styled.span`
  color: inherit;
  width: 18px;
`;

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
