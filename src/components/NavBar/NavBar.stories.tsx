import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

// Meta information for the NavBar component
const meta: Meta<typeof NavBar> = {
  title: 'Molecular/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the NavBar component
type Story = StoryObj<typeof NavBar>;

export const Main: Story = {
  args: {},
};
