import type { Meta, StoryObj } from '@storybook/react';
import { VideoButtonCard } from './VideoButtonCard';

// Meta information for the VideoButtonCard component
const meta: Meta<typeof VideoButtonCard> = {
  title: 'Molecular/VideoButtonCard',
  component: VideoButtonCard,
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the VideoButtonCard component
type Story = StoryObj<typeof VideoButtonCard>;

// Main/default story for the VideoButtonCard component
export const Main: Story = {
  args: {
    videoNumber: '1',
    totalVideos: '12',
    verseStart: '1',
    verseEnd: '10',
    surahName: 'Ali ‘Imran',
  },
};
