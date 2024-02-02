import type { Meta, StoryObj } from '@storybook/react';
import { VideoList } from './VideoList';
import { VideoButtonCardProps } from '../VideoButtonCard/VideoButtonCard';
import { VideoListHeaderProps } from '../VideoListHeader/VideoListHeader';

// Meta information for the VideoList component
const meta: Meta<typeof VideoList> = {
  title: 'Organism/VideoList',
  component: VideoList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the VideoList component
type Story = StoryObj<typeof VideoList>;

// Setting mock data for VideoList component
const surahName = 'Aal-E-Imran';

// header mock data
const sampleHeaader: VideoListHeaderProps = {
  surahName: surahName,
  nameTranslation: 'The Family of Imran',
  surahNameArabic: 'آل عمران',
  numberOfVerses: '200',
};

// Simple function to create mock data for the video button cards
const sampleVideoData: VideoButtonCardProps[] = Array.from(
  { length: 12 },
  (_, index) => ({
    videoNumber: (index + 1).toString(),
    totalVideos: '12',
    verseStart: (index * 10 + 1).toString(), // Assuming 10 verses per video, adjust as needed
    verseEnd: ((index + 1) * 10).toString(), // Assuming 10 verses per video, adjust as needed
    surahName,
  }),
);

// Main story showcasing the VideoList component
export const Main: Story = {
  args: { headerDetails: sampleHeaader, allVideos: sampleVideoData },
};
