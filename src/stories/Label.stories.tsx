import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from './Label';

export default {
  title: 'UI Basic Elements/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const MainLabel = Template.bind({});
MainLabel.args = {
  color: 'lavendar',
  label: 'Label',
};

export const NumberOfLessonsLabel = Template.bind({});
NumberOfLessonsLabel.args = {
  color: 'periwinkle',
  label: '3 Lessons',
};

export const SurahNumberLabel = Template.bind({});
SurahNumberLabel.args = {
  color: 'lavendar',
  label: '01',
  fontWeight: '600',
  size: 'small'
};

export const LessonLabel = Template.bind({});
LessonLabel.args = {
  color: 'periwinkle',
  label: 'Lesson 1',
  fontWeight: '600',
};

export const Periwinkle = Template.bind({});
Periwinkle.args = {
  color: 'periwinkle',
  label: 'Linguistic',
  size: 'small'
};

export const BabyBlue = Template.bind({});
BabyBlue.args = {
  color: 'babyBlue',
  label: 'Tafsir',
  size: 'small'
};

export const Mint = Template.bind({});
Mint.args = {
  color: 'mint',
  label: 'Comments',
  size: 'small'
};
