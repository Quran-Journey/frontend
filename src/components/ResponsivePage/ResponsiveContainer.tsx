import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';

/**
 * Interface for the props of the ResponsiveContainer component.
 * @param {React.ReactNode} children - The children of the component.
 */
interface ResponsiveContainerProps {
  children?: React.ReactNode;
}

/**
 * Styled component for a responsive div.
 * Adjusts padding, margin, and width based on breakpoints.
 */
const ResponsiveDiv = styled.div`
  display: block;
  padding-top: 80px;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;

  transition: all 0.3s ease;

  @media (${breakpoints.lg}) {
    padding-top: 80px;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
  }

  @media (${breakpoints.md}) {
    padding-top: 80px;
    margin-left: 7%;
    margin-right: 7%;
    width: 86%;
  }

  @media (${breakpoints.sm}) {
    padding-top: 80px;
    margin-left: 3%;
    margin-right: 3%;
    width: 94%;
  }

  @media (${breakpoints.xs}) {
    padding-top: 70px;
    margin-left: 1.5%;
    margin-right: 1.5%;
    width: 97%;
  }
`;

/**
 * Styled component for a parent div.
 * Sets the display property to block and the width to 100%.
 */
const ParentDiv = styled.div`
  display: block;
  width: 100%;
`;

/**
 * Renders a responsive container 
 *
 * @param {ResponsiveContainerProps} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the responsive container.
 * @returns {JSX.Element} The rendered responsive container component.
 */
export const ResponsiveContainer = ({
  children,
}: ResponsiveContainerProps): JSX.Element => {
  return (
    <ParentDiv>
      <ResponsiveDiv>{children}</ResponsiveDiv>
    </ParentDiv>
  );
};
