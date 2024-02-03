import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';
import { Label } from '../Label/Label';
import { Typography } from '../Typography/Typography';
import { FileEarmarkArrowDownFill } from '@styled-icons/bootstrap';

/**
 * Interface for the PDFDownloadButton component props.
 *
 * @property {function} onClick - Optional click event handler for the component.
 * @property {string} surahName - The name of the surah.
 * @property {string} verseStart - The starting verse number.
 * @property {string} verseEnd - The ending verse number.
 */
export interface PDFDownloadButtonProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  surahName: string;
  verseStart: string;
  verseEnd: string;
}

// Represents a styled div element used for displaying verse range.
const VerseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

// Styled component for the LeftSection.
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

// Represents a styled div element used for displaying content with space between the top.
const SpaceBetweenTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

// Styled component for a div that changes background color on hover.
const HoverDiv = styled.div`
  padding: 10px;
  border-radius: 10px;
  background: ${colours.lightGrey};

  cursor: pointer;

  &:hover {
    background: ${colours.lightGreenGradient};
    cursor: pointer;
  }
`;

// Styled component for rendering an icon.
const Icon = styled.div`
  color: ${colours.black};
  width: 20px;

  @media (${breakpoints.xs}) {
    width: 17px;
  }
`;

/**
 * Renders a PDF download button.
 *
 * @param onClick - Optional click event handler for the button.
 * @param surahName - The name of the surah.
 * @param verseStart - The starting verse number.
 * @param verseEnd - The ending verse number.
 * @returns The PDF download button component.
 */
export const PDFDownloadButton = ({
  onClick,
  surahName,
  verseStart,
  verseEnd,
}: PDFDownloadButtonProps) => {
  return (
    <HoverDiv onClick={onClick}>
      <SpaceBetweenTop>
        <LeftSection>
          <Label labelText="PDF" isWhiteOnHover={true} />
          <VerseDiv>
            <Typography variant="h4">
              Verse {verseStart}-{verseEnd}
            </Typography>
            <Typography variant="subtitle2">{surahName}</Typography>
          </VerseDiv>
        </LeftSection>
        <Icon>
          <FileEarmarkArrowDownFill />
        </Icon>
      </SpaceBetweenTop>
    </HoverDiv>
  );
};
