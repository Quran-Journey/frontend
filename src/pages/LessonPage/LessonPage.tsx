import * as React from 'react';
import styled from 'styled-components';
import { ResponsiveContainer } from '@/components/ResponsivePage/ResponsiveContainer';
import { NavBar } from '@/components/NavBar/NavBar';
import {
  SidebarDropdown,
  SidebarDropdownProps,
} from '@/components/SidebarDropdown/SidebarDropdown';

// TODO: Remove once fetch calls in place
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


export interface LessonPage {
  videoSectionData: VideoPlayerSectionProps;
  sidebarDropdownData: SidebarDropdownProps;
}


// TODO: Remove once fetch calls in place
const videoSectionData1: VideoPlayerSectionProps = {
  headerData: sampleVideoHeader,
  srcPDF: sampleSrcPDF,
  pdfDownloadData: samplePdfDownloadInfo,
  srcVideo: sampleVideoSrc,
};

/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export const LessonPage: React.FC = (): JSX.Element => {
  // TODO: fetch lesson page data here

  return (
    <>
      <NavBar />
      <SidebarDropdown surahName={"Ali' Imran"} />
      <ResponsiveContainer>
        <VideoPlayerSection
          headerData={videoSectionData1.headerData}
          srcPDF={videoSectionData1.srcPDF}
          pdfDownloadData={videoSectionData1.pdfDownloadData}
          srcVideo={videoSectionData1.srcVideo}
        />
      </ResponsiveContainer>
    </>
  );
};
