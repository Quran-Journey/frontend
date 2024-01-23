import type { Meta, StoryObj } from '@storybook/react';
import { ChapterListHeader } from './ChapterListHeader';

// Meta information for the ChapterListHeader component
const meta: Meta<typeof ChapterListHeader> = {
  title: 'Molecular/ChapterListHeader',
  component: ChapterListHeader,
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the ChapterListHeader component
type Story = StoryObj<typeof ChapterListHeader>;

// Main story showcasing the ChapterListHeader component
export const Main: Story = {
  args: {},
};
