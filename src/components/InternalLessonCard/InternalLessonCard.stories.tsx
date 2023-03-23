import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InternalLessonCard } from './InternalLessonCard';

export default {
  title: 'Components/Internal Lesson Card',
  component: InternalLessonCard,
} as ComponentMeta<typeof InternalLessonCard>;

const Template: ComponentStory<typeof InternalLessonCard> = (args) => (
  <InternalLessonCard {...args} />
);

export const MainInternalLessonCard = Template.bind({});
MainInternalLessonCard.args = {
  lessonNumber: '1',
  verseSection: 'Verses 1-4',
  surahNameEn: "Surah Al 'adiyat",
};
