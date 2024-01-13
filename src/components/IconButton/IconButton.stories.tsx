import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRightShort, BoxArrowDown } from '@styled-icons/bootstrap';
import { IconButton } from './IconButton';
import { colours } from '../../styles/colours';

// Generating an array of available colour options
const colourOptions = Object.keys(colours);

// Meta information for the IconButton component
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

// Defining the Story type based on the IconButton component
type Story = StoryObj<typeof IconButton>;

// Main story showcasing the IconButton with a icon
export const Main: Story = {
  args: {
    icon: <ArrowRightShort />,
  },
};

// Story showcasing the IconButton with a white icon
export const White: Story = {
  args: {
    icon: <ArrowRightShort />,
    colour: 'white,',
  },
};

// Story showcasing the IconButton with a download icon and white colour
export const Download: Story = {
  args: {
    icon: <BoxArrowDown />,
    colour: 'white,',
  },
};
