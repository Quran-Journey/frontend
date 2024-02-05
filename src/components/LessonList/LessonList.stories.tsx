import type { Meta, StoryObj } from '@storybook/react';
import { LessonList } from './LessonList';
import {
  sampleHeaader,
  sampleLessonData,
} from '@/mock_data/storybook_mock_data';

// Meta information for the LessonList component
const meta: Meta<typeof LessonList> = {
  title: 'Organism/LessonList',
  component: LessonList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the LessonList component
type Story = StoryObj<typeof LessonList>;

// Main story showcasing the LessonList component
export const Main: Story = {
  args: { headerDetails: sampleHeaader, allLessons: sampleLessonData },
};
