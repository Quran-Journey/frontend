import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';
import { Typography } from '../Typography/Typography';

const NavDiv = styled.div`
  padding: 30px 100px 15px 100px;
  width: 100%;

  border-bottom: 0.25px solid ${colours.grey};

  @media (${breakpoints.lg}) {
    padding: 23px 75px 12px 75px;
  }

  @media (${breakpoints.md}) {
    padding: 20px 50px 10px 50px;
  }

  @media (${breakpoints.sm}) {
    padding: 17px 20px 9px 20px;
  }

  @media (${breakpoints.xs}) {
    padding: 15px 10px 7px 10px;
  }
`;

export const NavBar = ({}) => {
  return (
    <NavDiv>
      <Typography variant="h4">Quran Journey</Typography>
    </NavDiv>
  );
};
