import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  disabled?: boolean; // make the button disabled or not
}

const ButtonDiv = styled.button<ButtonProps>`
  all: unset;

  color: #fff;
  font-family: General Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;

  display: inline-flex;
  padding: 8px 15px;
  align-items: center;
  gap: 5px;

  border-radius: 30px;
  border-bottom: 3px solid #005b45;
  outline: inherit;
  background: #00916e;

  cursor: pointer;

  transition: background 0.5s ease, border-bottom 0.5s ease;

  &:hover {
    border-bottom: 3px solid #003c2d;
    background: #005b45;
  }

  &:active {
    border-bottom: none;
    background: #005b45;
  }

  ${(props) => props.disabled && DISABLED}
`;

const DISABLED = css`
  color: #a9a9a9;
  background: #e8e8e8;
  border: none;

  cursor: default;

  &:hover {
    border: none;
    background: #e8e8e8;
  }

  &:active {
    border: none;
    background: #e8e8e8;
  }
`;

export const Button = ({
  onClick,
  children,
  disabled = false,
}: ButtonProps) => {
  return (
    <ButtonDiv onClick={onClick} disabled={disabled}>
      {children}
    </ButtonDiv>
  );
};
