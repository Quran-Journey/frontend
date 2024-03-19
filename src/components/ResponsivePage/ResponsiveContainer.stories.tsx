import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveContainer } from './ResponsiveContainer';
import { Sidebar, SidebarProps } from '@/components/Sidebar/Sidebar';
import {
  sampleChapterData,
  sampleHeaader,
  sampleLessonData,
  sampleSrcPDF,
  sampleVideoHeader,
  samplePdfDownloadInfo,
  sampleVideoSrc,
} from '@/mock_data/storybook_mock_data';
import {
  VideoPlayerSectionProps,
  VideoPlayerSection,
} from '@/components/VideoPlayerSection/VideoPlayerSection';

// Meta information for the ResponsiveContainer component
const meta: Meta<typeof ResponsiveContainer> = {
  title: 'Layout/ResponsiveContainer',
  component: ResponsiveContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'none' },
  },
};

export default meta;

// Defining the Story type based on the ResponsiveContainer component
type Story = StoryObj<typeof ResponsiveContainer>;

// Setting mock data
const chapterData: SidebarProps = {
  chapterData: { allChapters: sampleChapterData },
};

const lessonData: SidebarProps = {
  chapterData: { allChapters: sampleChapterData },
  lessonData: {
    headerDetails: sampleHeaader,
    allLessons: sampleLessonData,
  },
};

const videoSectionData: VideoPlayerSectionProps = {
  headerData: sampleVideoHeader,
  srcPDF: sampleSrcPDF,
  pdfDownloadData: samplePdfDownloadInfo,
  srcVideo: sampleVideoSrc,
};

// Exporting the ChapterSidebar component as a Story
export const ChapterSidebar: Story = {
  args: {
    children: <Sidebar chapterData={chapterData.chapterData} />,
  },
};

// Exporting the ChapterLessonSidebar component as a Story
export const ChapterLessonSidebar: Story = {
  args: {
    children: (
      <Sidebar
        chapterData={lessonData.chapterData}
        lessonData={lessonData.lessonData}
      />
    ),
  },
};

// Exporting the VideoPlayer component as a Story
export const VideoPlayer: Story = {
  args: {
    children: (
      <VideoPlayerSection
        headerData={videoSectionData.headerData}
        srcPDF={videoSectionData.srcPDF}
        pdfDownloadData={videoSectionData.pdfDownloadData}
        srcVideo={videoSectionData.srcVideo}
      />
    ),
  },
};
