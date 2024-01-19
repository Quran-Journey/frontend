import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

// Meta information for the Label component
const meta: Meta<typeof Label> = {
  title: 'Atomic/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    labelText: { control: 'text' },
  },
};

export default meta;

// Defining the Story type based on the Label component
type Story = StoryObj<typeof Label>;

// Main story showcasing the Label component with a default label text
export const Main: Story = {
  args: {
    labelText: 'Label',
  },
};
