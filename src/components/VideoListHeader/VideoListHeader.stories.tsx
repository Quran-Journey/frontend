import type { Meta, StoryObj } from '@storybook/react';
import { VideoListHeader } from './VideoListHeader';

// Meta information for the VideoListHeader component
const meta: Meta<typeof VideoListHeader> = {
  title: 'Molecular/VideoListHeader',
  component: VideoListHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the VideoListHeader component
type Story = StoryObj<typeof VideoListHeader>;

// Main/default story for the VideoListHeader component
export const Main: Story = {
  args: {
    surahName: 'Al-Fatiha',
    nameTranslation: 'The Opener',
    surahNameArabic: 'الفَاتِحَة',
    numberOfVerses: '7',
  },
};
