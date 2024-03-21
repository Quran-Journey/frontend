import React from 'react';
import styled from 'styled-components';
import { Typography } from '../Typography/Typography';
import { breakpoints } from '../../styles/breakpoints';

// Styled component for header div
const HeaderDiv = styled.div`
  display: flex;
  padding: 0 10px 0 10px;
  justify-content: space-between;
  align-items: center;
`;

// Styled component for parent div
const ParentDiv = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 18px;

  transition: all 0.3s ease;

  @media (${breakpoints.md}) {
    margin-top: 12px;
    margin-bottom: 15px;
  }

  @media (${breakpoints.sm}) {
    margin-top: 10px;
    margin-bottom: 12px;
  }

  @media (${breakpoints.xs}) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

/**
 * Renders the header component for the chapter list.
 *
 * @returns {JSX.Element} The rendered header component.
 */
export const ChapterListHeader = ({}): JSX.Element => {
  return (
    <ParentDiv>
      <HeaderDiv>
        <Typography variant="h1">Chapters</Typography>
        <Typography variant="h1_arabic">سور</Typography>
      </HeaderDiv>
    </ParentDiv>
  );
};
