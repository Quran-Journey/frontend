import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarProps } from '../Sidebar/Sidebar';
import {
  sampleChapterData,
  sampleHeaader,
  sampleLessonData,
  sampleSrcPDF,
  sampleVideoHeader,
  samplePdfDownloadInfo,
  sampleVideoSrc,
} from '@/mock_data/storybook_mock_data';
import { SidebarDropdown } from './SidebarDropdown';

// Meta information for the SidebarDropdown component
const meta: Meta<typeof SidebarDropdown> = {
  title: 'Organism/SidebarDropdown',
  component: SidebarDropdown,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the SidebarDropdown component
type Story = StoryObj<typeof SidebarDropdown>;

const mockLessonData: SidebarProps = {
  chapterData: { allChapters: sampleChapterData },
  lessonData: {
    headerDetails: sampleHeaader,
    allLessons: sampleLessonData,
  },
};

// This is a single-line comment
export const DisabledLessons: Story = {
  args: {
    sidebarData: mockLessonData,
    surahName: mockLessonData.lessonData.headerDetails.surahName,
  },
};
