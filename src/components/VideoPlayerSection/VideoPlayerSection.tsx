import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { VideoHeader, VideoHeaderProps } from '../VideoHeader/VideoHeader';
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
  srcVideo: string;
  pdfDownloadData: PDFDownloadButtonProps;
}

const VideoPlayer = styled.iframe`
  min-width: 100%;
  aspect-ratio: 16 / 9;
`;

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
`;

const HeaderItem = styled.div`
  width: 60%;
`;

const HeaderDownload = styled.div`
  width: 36%;
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
      <VideoPlayer
        src={`${srcVideo}&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
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
      <PDFEmbed src={srcPDF.src}></PDFEmbed>
      <ButtonGroup>
        <Button startIcon={<ArrowLeftCircleFill />}>Previous</Button>
        <Button endIcon={<ArrowRightCircleFill />}>Next</Button>
      </ButtonGroup>
    </VideoSectionDiv>
  );
};
