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
 * @interface TypographyProps
 * @property {string} variant - The variant of the typography.
 * @property {string|string[]} children - The content of the typography.
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
  children: string | string[];
}

// CSS styles for various Typography variants

// Defines a styled component for English heading 1 with font size adjustments for different breakpoints.
const H1 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  transition: all 0.3s ease;

  @media (${breakpoints.sm}) {
    font-size: 32px;
  }

  @media (${breakpoints.xs}) {
    font-size: 24px;
  }
`;

// Defines a styled component for English heading 2 with font size adjustments for different breakpoints.
const H2 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  transition: all 0.3s ease;

  @media (${breakpoints.sm}) {
    font-size: 28px;
  }

  @media (${breakpoints.xs}) {
    font-size: 20px;
  }
`;

// Defines a styled component for English heading 3 with font size adjustments for different breakpoints.
const H3 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  transition: all 0.3s ease;

  @media (${breakpoints.sm}) {
    font-size: 20px;
  }

  @media (${breakpoints.xs}) {
    font-size: 18px;
  }
`;

// Defines a styled component for English heading 4 with font size adjustments for different breakpoints.
const H4 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Poppins, Helvetica, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  transition: all 0.3s ease;

  @media (${breakpoints.sm}) {
    font-size: 18px;
  }

  @media (${breakpoints.xs}) {
    font-size: 16px;
  }
`;

// Defines a styled component for English subtitle 1 with font size adjustments for different breakpoints.
const SUBTITLE1 = css`
  color: ${colours.darkGrey};
  display: inline-block;

  font-family: General Sans, Open Sans, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  transition: all 0.3s ease;

  @media (${breakpoints.sm}) {
    font-size: 15px;
  }

  @media (${breakpoints.xs}) {
    font-size: 13px;
  }
`;

// Defines a styled component for English subtitle 2 with font size adjustments for different breakpoints.
const SUBTITLE2 = css`
  color: ${colours.darkGrey};
  display: inline-block;

  font-family: General Sans, Open Sans, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  transition: all 0.3s ease;

  @media (${breakpoints.sm}) {
    font-size: 13px;
  }

  @media (${breakpoints.xs}) {
    font-size: 12px;
  }
`;

// Defines a styled component for Arabic heading 1 with font size adjustments for different breakpoints.
const ARABIC_H1 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Noto Naskh Arabic;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  text-align: right;

  transition: all 0.3s ease;

  @media (${breakpoints.sm}) {
    font-size: 28px;
  }

  @media (${breakpoints.xs}) {
    font-size: 24px;
  }
`;

// Defines a styled component for Arabic heading 2 with font size adjustments for different breakpoints.
const ARABIC_H2 = css`
  color: ${colours.black};
  display: inline-block;

  font-family: Noto Naskh Arabic;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: right;

  transition: all 0.3s ease;

  @media (${breakpoints.sm}) {
    font-size: 18px;
  }

  @media (${breakpoints.xs}) {
    font-size: 16px;
  }
`;

/**
 * This is a styled div that applies different typography styles based on the "variant" prop.
 * The "variant" prop can be one of the following values: 'h1', 'h2', 'h3', 'h4', 'subtitle1', 'subtitle2', 'h1_arabic', 'h2_arabic'.
 * The component uses styled-components to apply the appropriate CSS styles based on the "variant" prop.
 *
 * Example usage:
 *
 * <StyledTypography variant="h1">Heading 1</StyledTypography>
 *
 * @param {object} props - The component props.
 * @param {string} props.variant - The variant of the typography.
 * @param {string|string[]} props.children - The content of the typography.
 */
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
 * Renders a typography component with the specified variant and children.
 *
 * @param {Object} props - The component props.
 * @param {string} props.variant - The variant of the typography component. Possible values are:
 *   - 'h1'
 *   - 'h2'
 *   - 'h3'
 *   - 'h4'
 *   - 'subtitle1'
 *   - 'subtitle2'
 *   - 'h1_arabic'
 *   - 'h2_arabic'
 * @param {string|string[]} props.children - The content of the typography component.
 * @returns {JSX.Element} The rendered typography component.
 */
export const Typography = ({
  variant,
  children,
}: TypographyProps): JSX.Element => {
  return <StyledTypography variant={variant}>{children}</StyledTypography>;
};
