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
        <Button startIcon={<ArrowLeftCircleFill />}>Previous</Button>
        <Button endIcon={<ArrowRightCircleFill />}>Next</Button>
      </ButtonGroup>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IxTuddLOAxQ?si=2a2Qe4zZNh3n6yKp"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
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
        <Button startIcon={<ArrowLeftCircleFill />}>Previous</Button>
        <Button endIcon={<ArrowRightCircleFill />}>Next</Button>
      </ButtonGroup>
    </VideoSectionDiv>
  );
};
