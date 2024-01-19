import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

// Meta information for the Typography component
const meta: Meta<typeof Typography> = {
  title: 'Atomic/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'subtitle1',
        'subtitle2',
        'h1_arabic',
        'h2_arabic',
      ],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;

// Defining the Story type based on the Typography component
type Story = StoryObj<typeof Typography>;

// Story showcasing Typography with Heading 1
export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

// Story showcasing Typography with Heading 2
export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

// Story showcasing Typography with Heading 3
export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

// Story showcasing Typography with Heading 4
export const Heading4: Story = {
  args: {
    variant: 'h4',
    children: 'Heading 4',
  },
};

// Story showcasing Typography with Subtitle 1
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Subtitle 1',
  },
};

// Story showcasing Typography with Subtitle 2
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Subtitle 2',
  },
};

// Story showcasing Typography with Arabic Heading 1
export const ArabicHeading1: Story = {
  args: {
    variant: 'h1_arabic',
    children: 'عنوان',
  },
};

// Story showcasing Typography with Arabic Heading 2
export const ArabicHeading2: Story = {
  args: {
    variant: 'h2_arabic',
    children: 'عنوان',
  },
};
