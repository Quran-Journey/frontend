import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';
import { Typography } from '../Typography/Typography';

/**
 * Interface for the NavBarProps.
 * @property {boolean} isVisible - Indicates whether the navigation bar is visible or not.
 */
interface NavBarProps {
  isVisible?: boolean;
}

// Styled component for the navigation bar (NavBar)
const NavDiv = styled.div<NavBarProps>`
  padding: 20px 25px 10px 25px;

  position: fixed;
  z-index: 100;
  width: 100%;

  background-color: ${colours.white};

  border-bottom: 0.25px solid ${colours.grey};

  ${(props) =>
    props.isVisible
      ? `
        transform: translateY(0);
      `
      : `
        transform: translateY(-100%);
      `}

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
 * Renders a navigation bar component with a scroll animation.
 *
 * @param {Object} style - The CSS properties to apply to the navigation bar.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
export const NavBar = ({}: NavBarProps): JSX.Element => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Handles the scroll event and updates the visibility of the navigation bar based on the scroll position.
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
    <NavDiv isVisible={isNavBarVisible}>
      <Typography variant="h4">Quran Journey</Typography>
    </NavDiv>
  );
};
