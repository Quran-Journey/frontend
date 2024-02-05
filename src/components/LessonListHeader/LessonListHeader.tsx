import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { Typography } from '../Typography/Typography';

/**
 * Represents the props for the LessonListHeader component.
 *
 * @interface LessonListHeaderProps
 * @property {string} surahName - The name of the surah.
 * @property {string} nameTranslation - The translation of the surah name.
 * @property {string} surahNameArabic - The Arabic name of the surah.
 * @property {string} numberOfVerses - The number of verses in the surah.
 */
export interface LessonListHeaderProps {
  surahName: string;
  nameTranslation: string;
  surahNameArabic: string;
  numberOfVerses: string;
}

/**
 * Represents a styled component for a div that displays a Surah name.
 */
const SurahNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
`;

/**
 * Styled component for a div that displays a Surah name in Arabic.
 */
const SurahNameDivAr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  padding-right: 10px;

  @media (${breakpoints.sm}) {
    gap: 0px;
  }
`;

/**
 * Represents a styled component that creates a flex container with space between its children.
 */
const SpaceBetween = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 15px;
  margin-bottom: 18px;

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
 * Renders the header component for the Lesson list.
 *
 * @param {LessonListHeaderProps} props - The props for the LessonListHeader component.
 * @param {string} props.surahName - The name of the surah.
 * @param {string} props.nameTranslation - The translation of the surah name.
 * @param {string} props.surahNameArabic - The Arabic name of the surah.
 * @param {string} props.numberOfVerses - The number of verses in the surah.
 * @returns {JSX.Element} The rendered header component.
 */
export const LessonListHeader = ({
  surahName,
  nameTranslation,
  surahNameArabic,
  numberOfVerses,
}: LessonListHeaderProps): JSX.Element => {
  return (
    <SpaceBetween>
      <SurahNameDiv>
        <Typography variant="h1">{surahName}</Typography>
        <Typography variant="subtitle1">{nameTranslation}</Typography>
      </SurahNameDiv>
      <SurahNameDivAr>
        <Typography variant="h1_arabic">{surahNameArabic}</Typography>
        <Typography variant="subtitle1">{numberOfVerses} Verses</Typography>
      </SurahNameDivAr>
    </SpaceBetween>
  );
};
