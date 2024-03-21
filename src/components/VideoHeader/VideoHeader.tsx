import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { Label } from '../Label/Label';
import { Typography } from '../Typography/Typography';

/**
 * Represents the props for the VideoHeader component.
 *
 * @interface VideoHeaderProps
 * @property {string} surahName - The name of the surah.
 * @property {string} surahNameArabic - The Arabic name of the surah.
 * @property {string} videoNumber - The number of the video.
 * @property {string} totalVideos - The total number of videos.
 * @property {string} verseStart - The starting verse.
 * @property {string} verseEnd - The ending verse.
 */
export interface VideoHeaderProps {
  surahName: string;
  surahNameArabic: string;
  videoNumber: string;
  totalVideos: string;
  verseStart: string;
  verseEnd: string;
}

// Styled component for a div containing labels
const LabelGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;

// Styled component for a div containing Surah name and labels
const SurahNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

// Styled component for a div containing Surah name in Arabic
const SurahNameArDiv = styled.div`
  padding-top: 5px;

  @media (${breakpoints.sm}) {
    padding-top: 3px;
  }

  @media (${breakpoints.xs}) {
    padding-top: 0px;
  }
`;

// Represents a styled component for a div that creates a space between the left and right sections.
const SpaceBetween = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

// Represents a styled component for a div that aligns items in the center.
const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
`;

/**
 * Renders the header component for a video.
 *
 * @param {VideoHeaderProps} props - The props for the VideoHeader component.
 * @param {string} props.surahName - The name of the surah.
 * @param {string} props.surahNameArabic - The Arabic name of the surah.
 * @param {string} props.videoNumber - The number of the video.
 * @param {string} props.totalVideos - The total number of videos.
 * @param {string} props.verseStart - The starting verse of the video.
 * @param {string} props.verseEnd - The ending verse of the video.
 * @returns {JSX.Element} The rendered VideoHeader component.
 */
export const VideoHeader = ({
  surahName,
  surahNameArabic,
  videoNumber,
  totalVideos,
  verseStart,
  verseEnd,
}: VideoHeaderProps): JSX.Element => {
  return (
    <SpaceBetween>
      <SurahNameDiv>
        <HeaderTitle>
          <Typography variant="h2">
            {surahName} | {'\xa0 '}
          </Typography>
          <Typography variant="h1_arabic">{surahNameArabic}</Typography>
        </HeaderTitle>
        <LabelGroup>
          <Label labelText={'verses ' + verseStart + '-' + verseEnd} />
          <Label labelText={'lesson ' + videoNumber + ' of ' + totalVideos} />
        </LabelGroup>
      </SurahNameDiv>
    </SpaceBetween>
  );
};
