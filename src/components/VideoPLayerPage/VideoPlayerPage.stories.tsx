import type { Meta, StoryObj } from '@storybook/react';
import { VideoPlayerPage, VideoPlayerPageProps } from './VideoPlayerPage';
import {
  sampleSrcPDF,
  sampleVideoHeader,
  samplePdfDownloadInfo,
  sampleVideoSrc,
  sampleChapterData,
  sampleHeaader,
  sampleLessonData,
} from '@/mock_data/storybook_mock_data';

// Meta information for the VideoPlayerPage component
const meta: Meta<typeof VideoPlayerPage> = {
  title: 'Page/VideoPlayerPage',
  component: VideoPlayerPage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the VideoPlayerPage component
type Story = StoryObj<typeof VideoPlayerPage>;

const sampleData: VideoPlayerPageProps = {
  videoPlayerSectionData: {
    headerData: sampleVideoHeader,
    srcPDF: sampleSrcPDF,
    pdfDownloadData: samplePdfDownloadInfo,
    srcVideo: sampleVideoSrc,
  },
  sidebarData: {
    chapterData: { allChapters: sampleChapterData },
    lessonData: {
      headerDetails: sampleHeaader,
      allLessons: sampleLessonData,
    },
  },
};

export const Main: Story = {
  args: {
    videoPlayerSectionData: sampleData.videoPlayerSectionData,
    sidebarData: sampleData.sidebarData,
  },
};
