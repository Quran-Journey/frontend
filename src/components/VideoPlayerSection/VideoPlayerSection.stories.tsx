import type { Meta, StoryObj } from '@storybook/react';
import {
  VideoPlayerSection,
  VideoPlayerSectionProps,
} from './VideoPlayerSection';
import {
  sampleChapterData,
  sampleHeaader,
  sampleLessonData,
  src,
  sampleVideoHeader,
  samplePdfDownloadInfo,
  sampleVideoSrc,
} from '@/mock_data/storybook_mock_data';


// Meta information for the Sidebar component
const meta: Meta<typeof VideoPlayerSection> = {
  title: 'Organism/VideoPlayerSection',
  component: VideoPlayerSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the VideoPlayerSection component
type Story = StoryObj<typeof VideoPlayerSection>;

// Creating the lessonData object with chapterData and lessonData properties
const videoSectionData: VideoPlayerSectionProps = {
  headerData: sampleVideoHeader,
  srcPDF: src,
  pdfDownloadData: samplePdfDownloadInfo,
  srcVideo: sampleVideoSrc,
};

// Exporting the Main component as a Story
export const Main: Story = {
  args: {
    headerData: videoSectionData.headerData,
    srcPDF: videoSectionData.srcPDF,
    pdfDownloadData: videoSectionData.pdfDownloadData,
    srcVideo: videoSectionData.srcVideo,
  },
};
