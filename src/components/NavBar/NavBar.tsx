import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';
import { Typography } from '../Typography/Typography';

/**
 * Interface for the NavBarProps.
 * @property {CSSProperties} style - The style object for the NavBar component.
 */
interface NavBarProps {
  style?: CSSProperties;
}

// Styled component for the navigation bar (NavBar)
const NavDiv = styled.div`
  padding: 20px 25px 10px 25px;

  position: fixed;
  z-index: 100;
  width: 100%;

  background-color: ${colours.white};

  border-bottom: 0.25px solid ${colours.grey};

  transition: all 0.3s ease;

  @media (${breakpoints.lg}) {
    padding: 20px 25px 10px 25px;
  }

  @media (${breakpoints.md}) {
    padding: 20px 25px 10px 25px;
  }

  @media (${breakpoints.sm}) {
    padding: 20px 15px 10px 15px;
  }

  @media (${breakpoints.xs}) {
    padding: 15px 10px 7px 10px;
  }
`;

/**
 * Renders a navigation bar component.
 *
 * @param {Object} style - The CSS properties to apply to the navigation bar.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export const NavBar = ({ style }: NavBarProps): JSX.Element => {
  return (
    <NavDiv style={style}>
      <Typography variant="h4">Quran Journey</Typography>
    </NavDiv>
  );
};
