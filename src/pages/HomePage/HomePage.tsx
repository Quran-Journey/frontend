import * as React from 'react';
import { ResponsiveContainer } from '@/components/ResponsivePage/ResponsiveContainer';
import { Sidebar, SidebarProps } from '@/components/Sidebar/Sidebar';
import {
  sampleChapterData,
  sampleHeaader,
  sampleLessonData,
} from '@/mock_data/storybook_mock_data';
import { NavBar } from '@/components/NavBar/NavBar';

const lessonData1: SidebarProps = {
  chapterData: { allChapters: sampleChapterData },
  lessonData: {
    headerDetails: sampleHeaader,
    allLessons: sampleLessonData,
  },
};

/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export const HomePage: React.FC = ({
  chapterData = lessonData1.chapterData,
  lessonData = null,
}: SidebarProps): JSX.Element => {
  return (
    <>
      <NavBar />
      <ResponsiveContainer>
        <Sidebar chapterData={chapterData} lessonData={lessonData} />
      </ResponsiveContainer>
    </>
  );
};
