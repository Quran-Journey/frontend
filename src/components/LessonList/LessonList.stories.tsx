import type { Meta, StoryObj } from '@storybook/react';
import { LessonList } from './LessonList';
import { LessonButtonCardProps } from '../LessonButtonCard/LessonButtonCard';
import { LessonListHeaderProps } from '../LessonListHeader/LessonListHeader';

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

// Setting mock data for LessonList component
const surahName = 'Aal-E-Imran';

// header mock data
const sampleHeaader: LessonListHeaderProps = {
  surahName: surahName,
  nameTranslation: 'The Family of Imran',
  surahNameArabic: 'آل عمران',
  numberOfVerses: '200',
};

// Simple function to create mock data for the Lesson button cards
const sampleLessonData: LessonButtonCardProps[] = Array.from(
  { length: 12 },
  (_, index) => ({
    LessonNumber: (index + 1).toString(),
    totalLessons: '12',
    verseStart: (index * 10 + 1).toString(), // Assuming 10 verses per Lesson, adjust as needed
    verseEnd: ((index + 1) * 10).toString(), // Assuming 10 verses per Lesson, adjust as needed
    surahName,
  }),
);

// Main story showcasing the LessonList component
export const Main: Story = {
  args: { headerDetails: sampleHeaader, allLessons: sampleLessonData },
};
