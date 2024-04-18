import * as React from 'react';
import { ResponsiveContainer } from '@/components/ResponsivePage/ResponsiveContainer';
import { Sidebar, SidebarProps } from '@/components/Sidebar/Sidebar';
import { NavBar } from '@/components/NavBar/NavBar';

// TODO: Remove once fetch calls in place
import {
  sampleChapterData,
  sampleHeaader,
  sampleLessonData,
} from '@/mock_data/storybook_mock_data';

// TODO: Remove once fetch calls in place
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

  // TODO: fetch chapter data here

  return (
    <>
      <NavBar />
      <ResponsiveContainer>
        <Sidebar chapterData={chapterData} lessonData={lessonData} />
      </ResponsiveContainer>
    </>
  );
};
