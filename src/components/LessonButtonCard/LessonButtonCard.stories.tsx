import type { Meta, StoryObj } from '@storybook/react';
import { LessonButtonCard } from './LessonButtonCard';

// Meta information for the LessonButtonCard component
const meta: Meta<typeof LessonButtonCard> = {
  title: 'Molecular/LessonButtonCard',
  component: LessonButtonCard,
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the LessonButtonCard component
type Story = StoryObj<typeof LessonButtonCard>;

// Main/default story for the LessonButtonCard component
export const Main: Story = {
  args: {
    lessonNumber: '1',
    totalLessons: '12',
    verseStart: '1',
    verseEnd: '10',
    surahName: 'Ali ‘Imran',
  },
};
