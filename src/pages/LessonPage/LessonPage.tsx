import * as React from 'react';
import { ResponsiveContainer } from '@/components/ResponsivePage/ResponsiveContainer';
import {
  sampleSrcPDF,
  sampleVideoHeader,
  samplePdfDownloadInfo,
  sampleVideoSrc,
} from '@/mock_data/storybook_mock_data';
import {
  VideoPlayerSectionProps,
  VideoPlayerSection,
} from '@/components/VideoPlayerSection/VideoPlayerSection';
import styled from 'styled-components';
import { NavBar } from '@/components/NavBar/NavBar';
import { SidebarDropdown } from '@/components/SidebarDropdown/SidebarDropdown';

const videoSectionData: VideoPlayerSectionProps = {
  headerData: sampleVideoHeader,
  srcPDF: sampleSrcPDF,
  pdfDownloadData: samplePdfDownloadInfo,
  srcVideo: sampleVideoSrc,
};

export const SidebarContainer = styled.div`
  position: absolute;
  top: 50;
  left: 0;
  width: 500px; 
  height: 100%;
  background: #fff;
  z-index: 999; 
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export const LessonPage: React.FC = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <SidebarDropdown surahName={"Ali' Imran"} />
      <ResponsiveContainer>
        <VideoPlayerSection
          headerData={videoSectionData.headerData}
          srcPDF={videoSectionData.srcPDF}
          pdfDownloadData={videoSectionData.pdfDownloadData}
          srcVideo={videoSectionData.srcVideo}
        />
      </ResponsiveContainer>
    </>
  );
};
