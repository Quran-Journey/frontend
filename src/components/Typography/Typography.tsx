import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';

import '@fontsource/noto-naskh-arabic/500.css';
import '@fontsource/open-sans/500.css';

/**
 * Props for the Typography component.
 *
 * @param variant - The typography variant (e.g., 'h1', 'subtitle1').
 * @param children - The text content to be displayed.
 */
interface TypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'subtitle1'
    | 'subtitle2'
    | 'h1_arabic'
    | 'h2_arabic';
  children: string;
}

// CSS styles for various Typography variants
const H1 = css`
  color: ${colours.black};

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const H2 = css`
  color: ${colours.black};

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const H3 = css`
  color: ${colours.black};

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const H4 = css`
  color: ${colours.black};

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SUBTITLE1 = css`
  color: ${colours.darkGrey};

  font-family: General Sans, Open Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SUBTITLE2 = css`
  color: ${colours.darkGrey};

  font-family: General Sans, Open Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ARABIC_H1 = css`
  color: ${colours.darkGrey};

  font-family: Noto Naskh Arabic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  text-align: right;
`;

const ARABIC_H2 = css`
  color: ${colours.darkGrey};

  font-family: Noto Naskh Arabic, IBM Plex Sans Arabic, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: right;
`;

// Styled component for the Typography
const StyledTypography = styled.div<TypographyProps>`
  ${(props) => {
    switch (props.variant) {
      case 'h1':
        return H1;
      case 'h2':
        return H2;
      case 'h3':
        return H3;
      case 'h4':
        return H4;
      case 'subtitle1':
        return SUBTITLE1;
      case 'subtitle2':
        return SUBTITLE2;
      case 'h1_arabic':
        return ARABIC_H1;
      case 'h2_arabic':
        return ARABIC_H2;
      default:
        return H1;
    }
  }}
`;

/**
 * Typography component that renders a styled text based on the specified variant.
 *
 * @param variant - The typography variant (e.g., 'h1', 'subtitle1').
 * @param children - The text content to be displayed.
 */
export const Typography = ({ variant, children }: TypographyProps) => {
  return <StyledTypography variant={variant}>{children}</StyledTypography>;
};
