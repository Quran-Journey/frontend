import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarProps } from './Sidebar';
import {
  sampleChapterData,
  sampleHeaader,
  sampleLessonData,
} from '@/mock_data/storybook_mock_data';

// Meta information for the Sidebar component
const meta: Meta<typeof Sidebar> = {
  title: 'Organism/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the LessonList component
type Story = StoryObj<typeof Sidebar>;

// Creating the lessonData object with chapterData and lessonData properties
const lessonData: SidebarProps = {
  chapterData: { allChapters: sampleChapterData },
  lessonData: {
    headerDetails: sampleHeaader,
    allLessons: sampleLessonData,
  },
};

// Exporting the Main component as a Story
export const Main: Story = {
  args: {
    chapterData: lessonData.chapterData,
    lessonData: lessonData.lessonData,
  },
};

// This is a single-line comment
export const DisabledLessons: Story = {
  args: {
    chapterData: lessonData.chapterData,
  },
};
