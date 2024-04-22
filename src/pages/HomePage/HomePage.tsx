import * as React from 'react';
import { useState, useEffect } from 'react';
import { ResponsiveContainer } from '@/components/ResponsivePage/ResponsiveContainer';
import { Sidebar, SidebarProps } from '@/components/Sidebar/Sidebar';
import { NavBar } from '@/components/NavBar/NavBar';
import surahs from '../../api/surahs';
import Surah from '@/models/surah/surah';

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
  const [chapters, setChapters] = useState<Surah[] | undefined>();
  useEffect(() => {
    async function fetchChapterData() {
      try {
        const fetchedChapterData = await surahs.getSurahs();
        setChapters(fetchedChapterData);
      } catch (error) {
        console.error('Error fetching chapter data:', error);
      }
    }

    fetchChapterData();
  }, []);

  console.log(chapters);

  return (
    <>
      <NavBar />
      <ResponsiveContainer>
        <Sidebar chapterData={chapterData} lessonData={lessonData} />
      </ResponsiveContainer>
    </>
  );
};
