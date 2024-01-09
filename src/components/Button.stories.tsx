import type { Meta, StoryObj } from '@storybook/react';

import { ArrowLeftCircleFill, ArrowRightCircleFill } from '@styled-icons/bootstrap';
// import { ArrowLeftCircleFill } from 'styled-icons/bootstrap';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atomic/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'text' },
    startIcon: { control: 'icon' },
    endIcon: { control: 'icon' },
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
