import type { Meta, StoryObj } from '@storybook/react';

import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from '@styled-icons/bootstrap';

import { Button } from './Button';

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
type Story = StoryObj<typeof Button>;

export const Main: Story = {
  args: {
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Previous Video',
    disabled: true,
    startIcon: <ArrowLeftCircleFill />,
  },
};

export const StartIcon: Story = {
  args: {
    children: 'Previous Video',
    startIcon: <ArrowLeftCircleFill />,
  },
};

export const EndIcon: Story = {
  args: {
    children: 'Next Video',
    endIcon: <ArrowRightCircleFill />,
  },
};

export const Selected: Story = {
  args: {
    children: 'Chapters',
    selected: true,
  },
};
