import type { Meta, StoryObj } from '@storybook/react';
import { HomePage } from './HomePage';
import {
  sampleChapterData,
  sampleHeaader,
  sampleLessonData,
} from '@/mock_data/storybook_mock_data';
import { SidebarProps } from '@/components/Sidebar/Sidebar';

// Meta information for the HomePage component
const meta: Meta<typeof HomePage> = {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'none' },
  },
};

export default meta;

// Defining the Story type based on the HomePage component
type Story = StoryObj<typeof HomePage>;

// Setting mock data
const chapterData1: SidebarProps = {
  chapterData: { allChapters: sampleChapterData },
  lessonData: {
    headerDetails: sampleHeaader,
    allLessons: sampleLessonData,
  },
};

// Stories
// Exporting the Main HomePage as a Story
export const Main: Story = {
    args: {
      chapterData: chapterData1.chapterData,
    },
  };

// Exporting the ChapterSelected HomePage as a Story
export const ChapterSelected: Story = {
  args: {
    chapterData: chapterData1.chapterData,
    lessonData: chapterData1.lessonData,
  },
};
