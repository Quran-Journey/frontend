import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Atomic/Typography',
  component: Typography,

  tags: ['autodocs'],

  argTypes: {
    variant: {
      options: ['h1', 'h2', 'h3', 'h4', 'subtitle1', 'subtitle2', 'h1_arabic', 'h2_arabic'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Subtitle 1',
  },
};

export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Subtitle 2',
  },
};

export const ArabicHeading1: Story = {
  args: {
    variant: 'h1_arabic',
    children: 'عنوان',
  },
};

export const ArabicHeading2: Story = {
  args: {
    variant: 'h2_arabic',
    children: 'عنوان',
  },
};
