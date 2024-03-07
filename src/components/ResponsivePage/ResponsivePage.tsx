import React, { useState, useEffect } from 'react';
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
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsNavBarVisible(
        prevScrollPos > currentScrollPos || currentScrollPos <= 0,
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <ParentDiv>
      <NavBar
        style={{
          transform: isNavBarVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.3s ease',
        }}
      />
      <ResponsiveDiv>{children}</ResponsiveDiv>
    </ParentDiv>
  );
};
