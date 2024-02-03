import type { Meta, StoryObj } from '@storybook/react';
import { ChapterList } from './ChapterList';
import { sampleChapterData } from '@/mock_data/storybook_mock_data';

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

// Main story showcasing the ChapterList component
export const Main: Story = { args: { allChapters: sampleChapterData } };
