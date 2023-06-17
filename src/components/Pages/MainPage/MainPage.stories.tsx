import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { MainPage } from './MainPage';

export default {
  title: 'Pages/Main Page',
  component: MainPage,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => (
  <MainPage {...args} />
);

export const OpeningPage = Template.bind({});
OpeningPage.args = {
  lessonCardsList: [
    {
      surahNumber: '100',
      surahNameEn: 'Al-’Adiyat',
      surahNameTranslation: 'The Courser',
      surahNameAr: 'العَادیَات',
      surahVerses: '11',
      numberOfLessons: '3 Lessons',
      surahType: 'Makki',
    },
    {
      surahNumber: '100',
      surahNameEn: 'Al-’Adiyat',
      surahNameTranslation: 'The Courser',
      surahNameAr: 'العَادیَات',
      surahVerses: '11',
      numberOfLessons: '3 Lessons',
      surahType: 'Makki',
    },
    {
      surahNumber: '100',
      surahNameEn: 'Al-’Adiyat',
      surahNameTranslation: 'The Courser',
      surahNameAr: 'العَادیَات',
      surahVerses: '11',
      numberOfLessons: '3 Lessons',
      surahType: 'Makki',
    },
    {
      surahNumber: '100',
      surahNameEn: 'Al-’Adiyat',
      surahNameTranslation: 'The Courser',
      surahNameAr: 'العَادیَات',
      surahVerses: '11',
      numberOfLessons: '3 Lessons',
      surahType: 'Makki',
    },
    {
      surahNumber: '100',
      surahNameEn: 'Al-’Adiyat',
      surahNameTranslation: 'The Courser',
      surahNameAr: 'العَادیَات',
      surahVerses: '11',
      numberOfLessons: '3 Lessons',
      surahType: 'Makki',
    },
  ],
};
