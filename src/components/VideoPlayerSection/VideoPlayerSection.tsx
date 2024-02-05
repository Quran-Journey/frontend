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

interface VideoPlayerSectionProps {
  headerData: VideoHeaderProps;
  src: PDFEmbedProps;
  pdfDownloadData: PDFDownloadButtonProps;
}

const VideoSectionDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const VideoPlayerSection = ({
  headerData,
  src,
  pdfDownloadData,
}: VideoPlayerSectionProps) => {
  return (
    <VideoSectionDiv>
      <ButtonGroup>
        <Button>Previous</Button>
        <Button>Next</Button>
      </ButtonGroup>
      <VideoHeader
        surahName={headerData.surahName}
        surahNameArabic={headerData.surahNameArabic}
        videoNumber={headerData.videoNumber}
        totalVideos={headerData.totalVideos}
        verseStart={headerData.verseStart}
        verseEnd={headerData.verseEnd}
      ></VideoHeader>
      <PDFDownloadButton
        surahName={pdfDownloadData.surahName}
        verseStart={pdfDownloadData.verseStart}
        verseEnd={pdfDownloadData.verseEnd}
      ></PDFDownloadButton>
      <PDFEmbed src={src.src}></PDFEmbed>
      <ButtonGroup>
        <Button>Previous</Button>
        <Button>Next</Button>
      </ButtonGroup>
    </VideoSectionDiv>
  );
};
