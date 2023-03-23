import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SurahLessonCard } from './SurahLessonCard';

export default {
  title: 'Components/Surah Lesson Card',
  component: SurahLessonCard,
} as ComponentMeta<typeof SurahLessonCard>;

const Template: ComponentStory<typeof SurahLessonCard> = (args) => (
  <SurahLessonCard {...args} />
);

export const MainSurahLessonCard = Template.bind({});
MainSurahLessonCard.args = {
    surahNumber: '100',
    surahNameEn: 'Al-’Adiyat',
    surahNameTranslation: 'The Courser',
    surahNameAr: 'العَادیَات',
    surahVerses: '11',
    numberOfLessons: '3 Lessons',
    surahType: 'Makki'
};