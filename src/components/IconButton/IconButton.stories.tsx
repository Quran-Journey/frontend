import type { Meta, StoryObj } from '@storybook/react';

import { ArrowRightShort, BoxArrowDown } from '@styled-icons/bootstrap';

import { IconButton } from './IconButton';

import { colours } from '../../styles/colours';

const colourOptions = Object.keys(colours);

const meta: Meta<typeof IconButton> = {
  title: 'Atomic/IconButton',
  component: IconButton,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'none' },
    colour: {
      options: colourOptions.reduce((options, name) => {
        options[name] = colours[name];
        return options;
      }, {} as { [key: string]: string }),
      control: { type: 'radio' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Main: Story = {
  args: {
    icon: <ArrowRightShort />,
  },
};

export const White: Story = {
  args: {
    icon: <ArrowRightShort />,
    colour: 'white,',
  },
};

export const Download: Story = {
  args: {
    icon: <BoxArrowDown />,
    colour: 'white,',
  },
};
