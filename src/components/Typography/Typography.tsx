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
  display: inline-block;

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (${breakpoints.sm}) {
    font-size: 32px;
  }

  @media (${breakpoints.xs}) {
    font-size: 24px;
  }
`;

const H2 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (${breakpoints.sm}) {
    font-size: 28px;
  }

  @media (${breakpoints.xs}) {
    font-size: 20px;
  }
`;

const H3 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (${breakpoints.sm}) {
    font-size: 20px;
  }

  @media (${breakpoints.xs}) {
    font-size: 18px;
  }
`;

const H4 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (${breakpoints.sm}) {
    font-size: 18px;
  }

  @media (${breakpoints.xs}) {
    font-size: 16px;
  }
`;

const SUBTITLE1 = css`
  color: ${colours.darkGrey};
  display: inline-block;

  font-family: General Sans, Open Sans, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (${breakpoints.sm}) {
    font-size: 15px;
  }

  @media (${breakpoints.xs}) {
    font-size: 13px;
  }
`;

const SUBTITLE2 = css`
  color: ${colours.darkGrey};
  display: inline-block;

  font-family: General Sans, Open Sans, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (${breakpoints.sm}) {
    font-size: 13px;
  }

  @media (${breakpoints.xs}) {
    font-size: 12px;
  }
`;

const ARABIC_H1 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Noto Naskh Arabic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  text-align: right;

  @media (${breakpoints.sm}) {
    font-size: 28px;
  }

  @media (${breakpoints.xs}) {
    font-size: 24px;
  }
`;

const ARABIC_H2 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Noto Naskh Arabic;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: right;

  @media (${breakpoints.sm}) {
    font-size: 18px;
  }

  @media (${breakpoints.xs}) {
    font-size: 16px;
  }
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
