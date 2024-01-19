import type { Meta, StoryObj } from '@storybook/react';

import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from '@styled-icons/bootstrap';

import { Button } from './Button';

// Meta information for the Button component
const meta: Meta<typeof Button> = {
  title: 'Atomic/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    startIcon: { control: 'none' },
    endIcon: { control: 'none' },
  },
};

export default meta;

// Defining the Story type based on the Button component
type Story = StoryObj<typeof Button>;

// Main/default story for the Button component
export const Main: Story = {
  args: {
    children: 'Button',
  },
};

// Story showcasing the disabled state of the Button
export const Disabled: Story = {
  args: {
    children: 'Previous Video',
    disabled: true,
    startIcon: <ArrowLeftCircleFill />,
  },
};

// Story showcasing the Button with a start icon
export const StartIcon: Story = {
  args: {
    children: 'Previous Video',
    startIcon: <ArrowLeftCircleFill />,
  },
};

// Story showcasing the Button with an end icon
export const EndIcon: Story = {
  args: {
    children: 'Next Video',
    endIcon: <ArrowRightCircleFill />,
  },
};

// Story showcasing the Button in a selected state
export const Selected: Story = {
  args: {
    children: 'Chapters',
    selected: true,
  },
};
