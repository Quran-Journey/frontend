import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';
import { Label } from '../Label/Label';
import { IconButton } from '../IconButton/IconButton';
import { ArrowRightShort } from '@styled-icons/bootstrap';
import { Typography } from '../Typography/Typography';

/**
 * Represents the props for the LessonButtonCard component.
 *
 * @interface LessonButtonCardProps
 * @property {function} onClick - Optional event handler for click events on the component.
 * @property {string} lessonNumber - The number of the Lesson.
 * @property {string} totalLessons - The total number of Lessons.
 * @property {string} verseStart - The starting verse of the Lesson.
 * @property {string} verseEnd - The ending verse of the Lesson.
 * @property {string} surahName - The name of the surah.
 */
export interface LessonButtonCardProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  lessonNumber: string;
  totalLessons: string;
  verseStart: string;
  verseEnd: string;
  surahName: string;
}

// Represents a styled component for a div that is used to create a verse range div.
const VerseRangeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Styled component for a left section of the LessonButtonCard component
const LeftSection = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 37px;

  @media (${breakpoints.md}) {
    gap: 30px;
  }

  @media (${breakpoints.sm}) {
    gap: 20px;
  }

  @media (${breakpoints.xs}) {
    gap: 15px;
  }
`;

// Represents a styled component for a div that creates a space between labels in the top section.
const SpaceBetweenTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
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
 * Renders a Lesson button card component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onClick - The click event handler function.
 * @param {string} props.lessonNumber - The number of the lesson.
 * @param {string} props.totalLessons - The total number of lessons.
 * @param {string} props.verseStart - The starting verse number.
 * @param {string} props.verseEnd - The ending verse number.
 * @param {string} props.surahName - The name of the Surah.
 * @returns {JSX.Element} - The rendered LessonButtonCard component.
 */
export const LessonButtonCard = ({
  onClick,
  lessonNumber,
  totalLessons,
  verseStart,
  verseEnd,
  surahName,
}: LessonButtonCardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <HoverDiv
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <ParentDiv>
        <SpaceBetweenTop>
          <LeftSection>
            <Label
              labelText={'lesson ' + lessonNumber + ' of ' + totalLessons}
              isWhiteOnHover={isHovered}
            />
            <VerseRangeDiv>
              <Typography variant="h4">
                Verse {verseStart}-{verseEnd}
              </Typography>
              <Typography variant="subtitle2">{surahName}</Typography>
            </VerseRangeDiv>
          </LeftSection>
          <IconButton
            icon={<ArrowRightShort style={{ transform: 'rotate(-45deg)' }} />}
            isWhiteOnHover={isHovered}
          ></IconButton>
        </SpaceBetweenTop>
      </ParentDiv>
    </HoverDiv>
  );
};
