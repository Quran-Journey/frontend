import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LessonTitle } from "./LessonTitle";

export default {
    title: 'Components/Lesson Title',
    component: LessonTitle,
  } as ComponentMeta<typeof LessonTitle>;
  
  const Template: ComponentStory<typeof LessonTitle> = (args) => (
    <LessonTitle {...args} />
  );

  export const MainLessonTitle = Template.bind({});
  MainLessonTitle.args = {
    surahNameEn: 'Al-’Adiyat',
    surahNameTranslation: 'The Courser',
    surahNameAr: 'سُوۡرَةُ العَادیَات',
    surahVerses: '11',
    introSections: ['Name', 'Revelation', 'Theme'],
    buttonLabel: 'Jump to Lecture'
  }

  export const InnerLessonTitle = Template.bind({});
  InnerLessonTitle.args = {
    surahNameEn: 'Al-’Adiyat',
    surahNameTranslation: 'The Courser',
    surahNameAr: 'سُوۡرَةُ العَادیَات',
    surahVerses: '11',
    introSections: ['3 Lessons', 'Meccan'],
    buttonLabel: 'Back to Introduction'
  }