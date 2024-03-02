import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { VideoHeader, VideoHeaderProps } from '../VideoHeader/VideoHeader';
import { VideoPlayer, VideoPlayerProps } from '../VideoPlayer/VideoPlayer';
import { breakpoints } from '../../styles/breakpoints';
import {
  PDFDownloadButton,
  PDFDownloadButtonProps,
} from '../PDFDownloadButton/PDFDownloadButton';
import { PDFEmbed, PDFEmbedProps } from '../PDFEmbed/PDFEmbed';
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from '@styled-icons/bootstrap';

/**
 * Represents the props for the VideoPlayerSection component.
 *
 * @interface VideoPlayerSectionProps
 * @property {VideoHeaderProps} headerData - The data for the video header.
 * @property {PDFEmbedProps} srcPDF - The source for the PDF embed.
 * @property {VideoPlayerProps} srcVideo - The source for the video player.
 * @property {PDFDownloadButtonProps} pdfDownloadData - The data for the PDF download button.
 */
export interface VideoPlayerSectionProps {
  headerData: VideoHeaderProps;
  srcPDF: PDFEmbedProps;
  srcVideo: VideoPlayerProps;
  pdfDownloadData: PDFDownloadButtonProps;
}

/**
 * Represents a styled component for a video section.
 */
const VideoSectionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * Styled component for the HeaderSection.
 */
const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;

  margin: 25px 0 50px 0;

  @media (${breakpoints.sm}) {
    gap: 15px;
    flex-direction: column;
    margin: 15px 0;
  }

  @media (${breakpoints.xs}) {
    flex-direction: column;
  }
`;

/**
 * Styled component for a header item.
 */
const HeaderItem = styled.div`
  width: 60%;

  @media (${breakpoints.sm}) {
    width: 100%;
  }
`;

/**
 * Styled component for the HeaderDownload element.
 */
const HeaderDownload = styled.div`
  width: 36%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;

  @media (${breakpoints.sm}) {
    width: 100%;
    justify-content: space-between;
  }
`;

/**
 * Represents a styled component that creates a PDF button section.
 */
const PDFButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 50px;
`;

/**
 * Represents a styled component that adds margin to a section.
 */
const MarginSection = styled.div`
  margin: 0 10px;
`;

const ButtonMargin = styled.div`
  margin-top: 20px;
`;

/**
 * Renders a video player section with buttons for navigation, a video player, a video header, a PDF download button, and a PDF embed.
 *
 * @param {VideoPlayerSectionProps} props - The props for the VideoPlayerSection component.
 * @param {VideoHeaderProps} props.headerData - The data for the video header.
 * @param {PDFEmbedProps} props.srcPDF - The data for the PDF embed.
 * @param {VideoPlayerProps} props.srcVideo - The data for the video player.
 * @param {PDFDownloadButtonProps} props.pdfDownloadData - The data for the PDF download button.
 * @returns {JSX.Element} The rendered VideoPlayerSection component.
 */
export const VideoPlayerSection = ({
  headerData,
  srcPDF,
  pdfDownloadData,
  srcVideo,
}: VideoPlayerSectionProps): JSX.Element => {
  return (
    <VideoSectionDiv>
      <VideoPlayer src={`${srcVideo.src}&rel=0`} title={srcVideo.title} />
      <MarginSection>
        <HeaderSection>
          <HeaderItem>
            <VideoHeader
              surahName={headerData.surahName}
              surahNameArabic={headerData.surahNameArabic}
              videoNumber={headerData.videoNumber}
              totalVideos={headerData.totalVideos}
              verseStart={headerData.verseStart}
              verseEnd={headerData.verseEnd}
            ></VideoHeader>
          </HeaderItem>
          <HeaderDownload>
            <ButtonGroup>
              <Button startIcon={<ArrowLeftCircleFill />}>Previous</Button>
              <Button endIcon={<ArrowRightCircleFill />}>Next</Button>
            </ButtonGroup>
          </HeaderDownload>
        </HeaderSection>
        <PDFButtonSection>
          <PDFEmbed src={srcPDF.src}></PDFEmbed>
          <ButtonMargin>
            <ButtonGroup>
              <Button startIcon={<ArrowLeftCircleFill />}>Previous</Button>
              <Button endIcon={<ArrowRightCircleFill />}>Next</Button>
            </ButtonGroup>
          </ButtonMargin>
        </PDFButtonSection>
      </MarginSection>
    </VideoSectionDiv>
  );
};
