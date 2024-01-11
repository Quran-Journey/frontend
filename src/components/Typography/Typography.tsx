import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';

import 'typeface-poppins'; // Import the Poppins CSS

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'subtitle1' | 'subtitle2';
  children: React.ReactNode;
}

const H1 = css`
  color: ${colours.black};

  font-family: Poppins, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const H2 = css`
  color: ${colours.black};

  font-family: Poppins, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const H3 = css`
  color: ${colours.black};

  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const H4 = css`
  color: ${colours.black};

  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SUBTITLE1 = css`
  color: ${colours.darkGrey};

  font-family: General Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SUBTITLE2 = css`
  color: ${colours.darkGrey};

  font-family: General Sans, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

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
      default:
        return H1;
    }
  }}
`;

export const Typography = ({ variant, children }: TypographyProps) => {
  return <StyledTypography variant={variant}>{children}</StyledTypography>;
};
