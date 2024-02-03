import type { Meta, StoryObj } from '@storybook/react';
import { ChapterList } from './ChapterList';
import { ChapterButtonCardProps } from '../ChapterButtonCard/ChapterButtonCard';
// Meta information for the ChapterList component
const meta: Meta<typeof ChapterList> = {
  title: 'Organism/ChapterList',
  component: ChapterList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the ChapterList component
type Story = StoryObj<typeof ChapterList>;

// Sample data for ChapterButtonCardProps
const sampleChapterData: ChapterButtonCardProps[] = [
  {
    surahName: 'Al-Fatiha',
    nameTranslation: 'The Opening',
    surahNameArabic: 'الفاتحة',
    numberOfVerses: '7',
    surahNumber: '1',
    numberOfVideos: '3',
  },
  {
    surahName: 'Al-Baqarah',
    nameTranslation: 'The Cow',
    surahNameArabic: 'البقرة',
    numberOfVerses: '286',
    surahNumber: '2',
    numberOfVideos: '5',
  },
  {
    surahName: 'Aal-E-Imran',
    nameTranslation: 'The Family of Imran',
    surahNameArabic: 'آل عمران',
    numberOfVerses: '200',
    surahNumber: '3',
    numberOfVideos: '4',
  },
  {
    surahName: 'An-Nisa',
    nameTranslation: 'The Women',
    surahNameArabic: 'النساء',
    numberOfVerses: '176',
    surahNumber: '4',
    numberOfVideos: '6',
  },
  {
    surahName: "Al-Ma'idah",
    nameTranslation: 'The Table Spread',
    surahNameArabic: 'المائدة',
    numberOfVerses: '120',
    surahNumber: '5',
    numberOfVideos: '4',
  },
  {
    surahName: "Al-An'am",
    nameTranslation: 'The Cattle',
    surahNameArabic: 'الأنعام',
    numberOfVerses: '165',
    surahNumber: '6',
    numberOfVideos: '3',
  },
  {
    surahName: "Al-A'raf",
    nameTranslation: 'The Heights',
    surahNameArabic: 'الأعراف',
    numberOfVerses: '206',
    surahNumber: '7',
    numberOfVideos: '5',
  },
  {
    surahName: 'Al-Anfal',
    nameTranslation: 'The Spoils of War',
    surahNameArabic: 'الأنفال',
    numberOfVerses: '75',
    surahNumber: '8',
    numberOfVideos: '2',
  },
  {
    surahName: 'At-Tawbah',
    nameTranslation: 'The Repentance',
    surahNameArabic: 'التوبة',
    numberOfVerses: '129',
    surahNumber: '9',
    numberOfVideos: '4',
  },
  {
    surahName: 'Yunus',
    nameTranslation: 'Jonah',
    surahNameArabic: 'يونس',
    numberOfVerses: '109',
    surahNumber: '10',
    numberOfVideos: '3',
  },
];

// Main story showcasing the ChapterList component
export const Main: Story = { args: { allChapters: sampleChapterData } };
