import type { Meta, StoryObj } from '@storybook/react';
import { LessonListHeader } from './LessonListHeader';

// Meta information for the LessonListHeader component
const meta: Meta<typeof LessonListHeader> = {
  title: 'Molecular/LessonListHeader',
  component: LessonListHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the LessonListHeader component
type Story = StoryObj<typeof LessonListHeader>;

// Main/default story for the LessonListHeader component
export const Main: Story = {
  args: {
    surahName: 'Al-Fatiha',
    nameTranslation: 'The Opener',
    surahNameArabic: 'الفَاتِحَة',
    numberOfVerses: '7',
  },
};
