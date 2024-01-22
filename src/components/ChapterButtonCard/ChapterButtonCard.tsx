import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';
import { Label } from '../Label/Label';
import { IconButton } from '../IconButton/IconButton';
import { ArrowRightShort } from '@styled-icons/bootstrap';
import { Typography } from '../Typography/Typography';

/**
 * Represents the props for the ChapterButtonCard component.
 *
 * @property {function} onClick - Optional event handler for the button click event.
 * @property {string} surahName - The name of the surah.
 * @property {string} nameTranslation - The translation of the surah name.
 * @property {string} surahNameArabic - The Arabic name of the surah.
 * @property {string} numberOfVerses - The number of verses in the surah.
 * @property {string} surahNumber - The number of the surah.
 * @property {string} numberOfVideos - The number of videos related to the surah.
 */
export interface ChapterButtonCardProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  surahName: string;
  nameTranslation: string;
  surahNameArabic: string;
  numberOfVerses: string;
  surahNumber: string;
  numberOfVideos: string;
}

// Represents a styled component for a div element with a flex layout at the start.
const SurahNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Represents a styled component for a div element with a flex layout at the end.
const SurahNameDivAr = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

// Represents a styled component for a div element with flex layout.
const SpaceBetween = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

// Represents a styled component for a div element with space between the elements.
const SpaceBetweenCenter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media (${breakpoints.sm}) {
    margin-bottom: 7px;
  }

  @media (${breakpoints.xs}) {
    margin-bottom: 5px;
  }
`;

// Represents a styled component for a div element containing label components.
const LabelGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3px;
`;

// Represents a styled component for a div element containing all other styled divs.
const ParentDiv = styled.div`
  padding: 13px 0;
  border-top: 0.25px solid ${colours.grey};
  margin: 0 10px;
  min-width: 100%

  cursor: pointer;

  transition: border 0s ease;

  &:hover {
    cursor: pointer;

    border: none;
  }

  @media (${breakpoints.sm}) {
    padding: 10px 0;
  }

  @media (${breakpoints.xs}) {
    padding: 7px 0;
  }
`;

// Represents a styled component for a div element containing all other styled divs with gradient hover.
const HoverDiv = styled.div`
  background: ${colours.white}; 
  transition: background 0.3s ease, padding 0.2s ease, border 0s ease;

  &:hover {
    cursor: pointer;

    border-radius: 10px;
    background: ${colours.lightGreenGradient};
`;

/**
 * Renders a button card for a chapter.
 *
 * @param onClick - The function to be called when the button is clicked.
 * @param surahName - The name of the chapter.
 * @param nameTranslation - The translation of the chapter name.
 * @param surahNameArabic - The Arabic name of the chapter.
 * @param numberOfVerses - The number of verses in the chapter.
 * @param surahNumber - The number of the chapter.
 * @param numberOfVideos - The number of videos related to the chapter.
 * @returns The rendered ChapterButtonCard component.
 */
export const ChapterButtonCard = ({
  onClick,
  surahName,
  nameTranslation,
  surahNameArabic,
  numberOfVerses,
  surahNumber,
  numberOfVideos,
}: ChapterButtonCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverDiv
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <ParentDiv>
        <SpaceBetweenCenter>
          <LabelGroup>
            <Label
              labelText={
                surahNumber.length === 1 ? `0${surahNumber}` : surahNumber
              }
              isWhiteOnHover={isHovered}
            />
            <Label
              labelText={numberOfVideos + ' videos'}
              isWhiteOnHover={isHovered}
            />
          </LabelGroup>
          <IconButton
            icon={<ArrowRightShort style={{ transform: 'rotate(-45deg)' }} />}
            isWhiteOnHover={isHovered}
          ></IconButton>
        </SpaceBetweenCenter>
        <SpaceBetween>
          <SurahNameDiv>
            <Typography variant="h4">{surahName}</Typography>
            <Typography variant="subtitle2">{nameTranslation}</Typography>
          </SurahNameDiv>
          <SurahNameDivAr>
            <Typography variant="h2_arabic">{surahNameArabic}</Typography>
            <Typography variant="subtitle2">{numberOfVerses} verses</Typography>
          </SurahNameDivAr>
        </SpaceBetween>
      </ParentDiv>
    </HoverDiv>
  );
};
