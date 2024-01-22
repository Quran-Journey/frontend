import type { Meta, StoryObj } from '@storybook/react';

import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
} from '@styled-icons/bootstrap';

import { Button } from '../Button/Button';
import { ButtonGroup } from './ButtonGroup';

// Meta information for the ButtonGroup component
const meta: Meta<typeof ButtonGroup> = {
  title: 'Molecular/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    children: { control: 'none' },
  },
};

export default meta;

// Defining the Story type based on the ButtonGroup component
type Story = StoryObj<typeof ButtonGroup>;

// The Main story showcases the ButtonGroup component with previous and next buttons.
export const Main: Story = {
  args: {
    children: [
      <Button startIcon={<ArrowLeftCircleFill />} key="previous">
        {'Previous Video'}
      </Button>,
      <Button endIcon={<ArrowRightCircleFill />} key="next">
        {'Next Video'}
      </Button>,
    ],
  },
};

// The Selected story showcases the ButtonGroup component with chapters and videos buttons with chapters selceted.
export const Selected: Story = {
  args: {
    children: [
      <Button key="chapters" selected={true}>
        {'Chapters'}
      </Button>,
      <Button key="videos">{'Videos'}</Button>,
    ],
  },
};

// The Disabled story showcases the ButtonGroup component with previous and next buttons with previous disabled.

export const Disabled: Story = {
  args: {
    children: [
      <Button
        startIcon={<ArrowLeftCircleFill />}
        key="previous"
        disabled={true}
      >
        {'Previous Video'}
      </Button>,
      <Button endIcon={<ArrowRightCircleFill />} key="next">
        {'Next Video'}
      </Button>,
    ],
  },
};
