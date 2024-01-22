import type { Meta, StoryObj } from '@storybook/react';
import { ChapterButtonCard } from './ChapterButtonCard';

// Meta information for the ChapterButtonCard component
const meta: Meta<typeof ChapterButtonCard> = {
  title: 'Molecular/ChapterButtonCard',
  component: ChapterButtonCard,
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the ChapterButtonCard component
type Story = StoryObj<typeof ChapterButtonCard>;

// Main/default story for the ChapterButtonCard component
export const Main: Story = {
  args: {
    surahName: 'Al-Fatiha',
    nameTranslation: 'The Opener',
    surahNameArabic: 'الفَاتِحَة',
    numberOfVerses: '7',
    surahNumber: '01',
    numberOfVideos: '1',
  },
};
