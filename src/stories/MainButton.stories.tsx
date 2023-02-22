import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainButton } from './MainButton';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

export default {
  title: 'UI Elements/Button',
  component: MainButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainButton>;

const Template: ComponentStory<typeof MainButton> = (args) => <MainButton {...args} />;

export const JumpToLesson = Template.bind({});
JumpToLesson.args = {
  color: 'periwinkle',
  size: 'small',
  label: 'Jump to Lesson',
  iconEnd: <ArrowCircleRightOutlinedIcon />
};

export const Back = Template.bind({});
Back.args = {
  color: 'periwinkle',
  size: 'small',
  label: 'Back',
  disabled: true,
  iconStart: <ArrowCircleLeftOutlinedIcon />
};

export const Next = Template.bind({});
Next.args = {
  color: 'periwinkle',
  size: 'small',
  label: 'Next',
  iconEnd: <ArrowCircleRightOutlinedIcon />
};
