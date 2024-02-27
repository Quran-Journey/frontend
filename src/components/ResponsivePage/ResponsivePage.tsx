import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { NavBar } from '../NavBar/NavBar';

interface ResponsivePageProps {
  children?: React.ReactNode;
}
const ResponsiveDiv = styled.div`
  display: block;
  padding-top: 100px;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;

  @media (${breakpoints.md}) {
    padding-top: 80px;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
  }

  @media (${breakpoints.sm}) {
    padding-top: 70px;
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
  }

  @media (${breakpoints.xs}) {
    padding-top: 60px;
    margin-left: 3%;
    margin-right: 3%;
    width: 94%;
  }
`;

const ParentDiv = styled.div`
  display: block;
  margin: 0;
  padding: 0;
`;

export const ResponsivePage = ({ children }: ResponsivePageProps) => {
  return (
    <ParentDiv>
      <NavBar />
      <ResponsiveDiv>{children}</ResponsiveDiv>
    </ParentDiv>
  );
};
