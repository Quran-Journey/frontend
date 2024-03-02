import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { NavBar } from '../NavBar/NavBar';

interface ResponsivePageProps {
  children?: React.ReactNode;
}
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
    padding-top: 55px;
    margin-left: 1.5%;
    margin-right: 1.5%;
    width: 97%;
  }
`;

const ParentDiv = styled.div`
  display: block;
  width: 100%;
`;

export const ResponsivePage = ({ children }: ResponsivePageProps) => {
  return (
    <ParentDiv>
      <NavBar />
      <ResponsiveDiv>{children}</ResponsiveDiv>
    </ParentDiv>
  );
};
