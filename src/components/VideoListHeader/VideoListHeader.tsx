import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { Typography } from '../Typography/Typography';

/**
 * Represents the props for the VideoListHeader component.
 *
 * @interface VideoListHeaderProps
 * @property {string} surahName - The name of the surah.
 * @property {string} nameTranslation - The translation of the surah name.
 * @property {string} surahNameArabic - The Arabic name of the surah.
 * @property {string} numberOfVerses - The number of verses in the surah.
 */
interface VideoListHeaderProps {
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
  padding: 10px 0;
`;

/**
 * Renders the header component for the video list.
 *
 * @param {VideoListHeaderProps} props - The props for the VideoListHeader component.
 * @param {string} props.surahName - The name of the surah.
 * @param {string} props.nameTranslation - The translation of the surah name.
 * @param {string} props.surahNameArabic - The Arabic name of the surah.
 * @param {string} props.numberOfVerses - The number of verses in the surah.
 * @returns {JSX.Element} The rendered header component.
 */
export const VideoListHeader = ({
  surahName,
  nameTranslation,
  surahNameArabic,
  numberOfVerses,
}: VideoListHeaderProps): JSX.Element => {
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
