import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';
import { Typography } from '../Typography/Typography';

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

// NavBar component that renders the navigation bar with a title
export const NavBar = ({}) => {
  return (
    <NavDiv>
      <Typography variant="h4">Quran Journey</Typography>
    </NavDiv>
  );
};
