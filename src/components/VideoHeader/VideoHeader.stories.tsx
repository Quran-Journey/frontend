import type { Meta, StoryObj } from '@storybook/react';
import { VideoHeader } from './VideoHeader';

// Meta information for the VideoHeader component
const meta: Meta<typeof VideoHeader> = {
  title: 'Molecular/VideoHeader',
  component: VideoHeader,
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the VideoHeader component
type Story = StoryObj<typeof VideoHeader>;

// Main/default story for the VideoHeader component
export const Main: Story = {
  args: {
    surahName: 'Al-Fatiha',
    surahNameArabic: 'الفَاتِحَة',
    videoNumber: '1',
    totalVideos: '12',
    verseStart: '1',
    verseEnd: '10',
  },
};
