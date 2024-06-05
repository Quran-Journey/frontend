import React from 'react';
import styled from 'styled-components';
import {
  LessonListHeader,
  LessonListHeaderProps,
} from '../LessonListHeader/LessonListHeader';
import {
  LessonButtonCard,
  LessonButtonCardProps,
} from '../LessonButtonCard/LessonButtonCard';
import Lesson from '@/models/lesson/lesson';

/**
 * Represents the props for the LessonListProps component.
 *
 * @interface LessonListProps
 * @property {LessonListHeaderProps} headerDetails - The Lesson list chapter header details.
 * @property {Array<LessonButtonCardProps>} allLessons - The array of LessonButtonCardProps representing all the Lessons.
 */
export interface LessonListProps {
  headerDetails?: LessonListHeaderProps;
  allLessons?: Array<LessonButtonCardProps>;

  surahName?: string;
  nameTranslation?: string;
  surahNameArabic?: string;
  numberOfVerses?: string;

  lessonList?: Lesson[];
}

/**
 * Represents the styled component for the sidebar div.
 */
const LessonListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * Renders a list of Lesson button components with a header.
 *
 * @param {LessonListProps} headerDetails - The header details for the Lesson list.
 * @param {Array<LessonButtonCardProps>} allLessons - An array of Lesson details.
 * @returns {JSX.Element} - The rendered Lesson list component.
 */
export const LessonList = ({
  headerDetails,
  allLessons,
  lessonList,
  surahName,
  nameTranslation,
  surahNameArabic,
  numberOfVerses,
}: LessonListProps): JSX.Element => {
  function returnApiLessonList() {
    if (lessonList) {
      const lessonListInfo = lessonList.map((lesson: Lesson) => (
        <LessonButtonCard
          key={lesson.surahId} // Add a unique key for each mapped component
          lessonNumber={lesson.lessonId}
          totalLessons={'00'}
          verseStart={lesson.startVerse}
          verseEnd={lesson.endVerse}
          surahName={lesson.surahId}
        />
      ));
      return lessonListInfo;
    } else {
      const lessonListInfo = allLessons.map((lesson, index) => (
        <LessonButtonCard
          key={index} // Add a unique key for each mapped component
          lessonNumber={lesson.lessonNumber}
          totalLessons={lesson.totalLessons}
          verseStart={lesson.verseStart}
          verseEnd={lesson.verseEnd}
          surahName={lesson.surahName}
        />
      ));
      return lessonListInfo;
    }
  }

  function renderHeader() {
    if (lessonList) {
      const header = (
        <LessonListHeader
          surahName={surahName}
          nameTranslation={nameTranslation}
          surahNameArabic={surahNameArabic}
          numberOfVerses={numberOfVerses}
        />
      );
      return header;
    } else {
      const header = (
        <LessonListHeader
          surahName={headerDetails.surahName}
          nameTranslation={headerDetails.nameTranslation}
          surahNameArabic={headerDetails.surahNameArabic}
          numberOfVerses={headerDetails.numberOfVerses}
        />
      );

      return header;
    }
  }

  console.log('ive reached here');

  return (
    <LessonListDiv>
      {renderHeader()}
      {returnApiLessonList()}
    </LessonListDiv>
  );
};
