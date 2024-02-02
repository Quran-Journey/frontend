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

/**
 * Represents the props for the LessonListProps component.
 *
 * @interface LessonListProps
 * @property {LessonListHeaderProps} headerDetails - The Lesson list chapter header details.
 * @property {Array<LessonButtonCardProps>} allLessons - The array of LessonButtonCardProps representing all the Lessons.
 */
interface LessonListProps {
  headerDetails: LessonListHeaderProps;
  allLessons: Array<LessonButtonCardProps>;
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
}: LessonListProps): JSX.Element => {
  return (
    <LessonListDiv>
      <LessonListHeader
        surahName={headerDetails.surahName}
        nameTranslation={headerDetails.nameTranslation}
        surahNameArabic={headerDetails.surahNameArabic}
        numberOfVerses={headerDetails.numberOfVerses}
      />
      {allLessons.map((lesson, index) => (
        <LessonButtonCard
          key={index} // Add a unique key for each mapped component
          lessonNumber={lesson.lessonNumber}
          totalLessons={lesson.totalLessons}
          verseStart={lesson.verseStart}
          verseEnd={lesson.verseEnd}
          surahName={lesson.surahName}
        />
      ))}
    </LessonListDiv>
  );
};
