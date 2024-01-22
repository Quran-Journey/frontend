import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';

import '@fontsource/open-sans/400.css';

/**
 * Interface for the LabelProps.
 *
 * @param {string | string[]} labelText - The text to be displayed in the label.
 * @param {boolean} [isWhiteOnHover] - Optional boolean indicating if the label should be white on hover.
 */
interface LabelProps {
  labelText: string | string[];
  isWhiteOnHover?: boolean;
}

/**
 * Styled component for the Label.
 */
const LabelDiv = styled.div<LabelProps>`
  border-radius: 10px;
  background: ${(props) =>
    props.isWhiteOnHover ? colours.white : colours.lightGreen};
  display: flex;
  padding: 1px 7px;
  align-items: center;

  color: ${colours.black};
  font-family: General Sans, Open Sans, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (${breakpoints.sm}) {
    font-size: 12px;
    padding: 1px 7px;
  }

  @media (${breakpoints.xs}) {
    font-size: 10px;
    padding: 1px 6px;
  }
`;

/**
 * Renders a styled label component.
 * @param {string | string[]} labelText - The text to be displayed in the label.
 * @returns {JSX.Element} The rendered label component.
 */
export const Label = ({
  labelText,
  isWhiteOnHover = false,
}: LabelProps): JSX.Element => {
  return (
    <LabelDiv isWhiteOnHover={isWhiteOnHover} labelText={labelText}>
      {labelText}
    </LabelDiv>
  );
};
