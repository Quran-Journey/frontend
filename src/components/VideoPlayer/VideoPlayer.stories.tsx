import type { Meta, StoryObj } from '@storybook/react';
import { VideoPlayer } from './VideoPlayer';

// Meta information for the VideoPlayer component
const meta: Meta<typeof VideoPlayer> = {
  title: 'Molecular/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the VideoPlayer component
type Story = StoryObj<typeof VideoPlayer>;

// Exporting the Main component as a Story
export const Main: Story = {
  args: {
    src: 'https://www.youtube.com/embed/IxTuddLOAxQ?si=2a2Qe4zZNh3n6yKp',
  },
};
