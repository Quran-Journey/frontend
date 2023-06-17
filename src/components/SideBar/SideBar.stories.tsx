import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideBar } from './SideBar';

export default {
  title: 'Components/Side Bar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const MainSideBar = Template.bind({});
MainSideBar.args = {
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
