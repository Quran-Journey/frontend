import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';

import '@fontsource/open-sans/400.css';

/**
 * Props for the Label component.
 *
 * @param labelText - The text to be displayed in the label.
 */
interface LabelProps {
  labelText: string;
}

/**
 * Styled component for the Label.
 */
const LabelDiv = styled.div`
  border-radius: 10px;
  background: ${colours.lightGreen};
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
 * Label component that renders a styled label.
 *
 * @param labelText - The text to be displayed in the label.
 */
export const Label = ({ labelText }: LabelProps) => {
  return <LabelDiv>{labelText}</LabelDiv>;
};
