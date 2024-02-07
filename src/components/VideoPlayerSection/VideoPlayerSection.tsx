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

export interface VideoPlayerSectionProps {
  headerData: VideoHeaderProps;
  srcPDF: PDFEmbedProps;
  srcVideo: VideoPlayerProps;
  pdfDownloadData: PDFDownloadButtonProps;
}

const VideoSectionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  margin: 38px 0;

  @media (${breakpoints.sm}) {
    gap: 15px;
    flex-direction: column;
    margin: 15px 0;

  }

  @media (${breakpoints.xs}) {
    flex-direction: column;
  }
`;

const HeaderItem = styled.div`
  width: 60%;

  @media (${breakpoints.sm}) {
    width: 100%;
  }
`;

const HeaderDownload = styled.div`
  width: 36%;

  @media (${breakpoints.sm}) {
    width: 100%;
  }
`;

const PDFButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const VideoPlayerSection = ({
  headerData,
  srcPDF,
  pdfDownloadData,
  srcVideo,
}: VideoPlayerSectionProps) => {
  return (
    <VideoSectionDiv>
      <ButtonGroup>
        <Button startIcon={<ArrowLeftCircleFill />}>Previous</Button>
        <Button endIcon={<ArrowRightCircleFill />}>Next</Button>
      </ButtonGroup>
      <VideoPlayer src={`${srcVideo.src}&rel=0`} title={srcVideo.title} />
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
          <PDFDownloadButton
            surahName={pdfDownloadData.surahName}
            verseStart={pdfDownloadData.verseStart}
            verseEnd={pdfDownloadData.verseEnd}
          ></PDFDownloadButton>
        </HeaderDownload>
      </HeaderSection>
      <PDFButtonSection>
        <PDFEmbed src={srcPDF.src}></PDFEmbed>
        <ButtonGroup>
          <Button startIcon={<ArrowLeftCircleFill />}>Previous</Button>
          <Button endIcon={<ArrowRightCircleFill />}>Next</Button>
        </ButtonGroup>
      </PDFButtonSection>
    </VideoSectionDiv>
  );
};
