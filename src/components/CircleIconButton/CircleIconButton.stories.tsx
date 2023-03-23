import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircleIconButton } from './CircleIconButton';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

export default {
  title: 'UI Basic Elements/Circle Icon Button',
  component: CircleIconButton,
} as ComponentMeta<typeof CircleIconButton>;

const Template: ComponentStory<typeof CircleIconButton> = (args) => <CircleIconButton {...args} />;

export const OpenButton = Template.bind({});
OpenButton.args = {
  color: 'black',
  ariaLabel: 'Open Button',
  icon: <ArrowCircleRightIcon fontSize='large' sx={{ transform: "rotate(-45deg)" }} />,
};

export const UpButton = Template.bind({});
UpButton.args = {
  color: 'black',
  ariaLabel: 'Open Button',
  icon: <ArrowCircleRightIcon fontSize='large' sx={{ transform: "rotate(-90deg)" }}/>,
};
