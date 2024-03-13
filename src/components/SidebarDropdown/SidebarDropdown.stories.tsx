import type { Meta, StoryObj } from '@storybook/react';
import { SidebarProps } from '../Sidebar/Sidebar';
import {
  sampleChapterData,
  sampleHeaader,
  sampleLessonData,
  sampleSurahName,
} from '@/mock_data/storybook_mock_data';
import { SidebarDropdown } from './SidebarDropdown';

// Meta information for the SidebarDropdown component
const meta: Meta<typeof SidebarDropdown> = {
  title: 'Organism/SidebarDropdown',
  component: SidebarDropdown,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

// Defining the Story type based on the SidebarDropdown component
type Story = StoryObj<typeof SidebarDropdown>;

// Definig mock data for MainDropdown Story
const mockLessonData: SidebarProps = {
  chapterData: { allChapters: sampleChapterData },
  lessonData: {
    headerDetails: sampleHeaader,
    allLessons: sampleLessonData,
  },
};

// MainDropdown is a Story object that represents a dropdown component in the sidebar
export const MainDropdown: Story = {
  args: {
    sidebarData: mockLessonData,
    surahName: sampleSurahName,
  },
};
