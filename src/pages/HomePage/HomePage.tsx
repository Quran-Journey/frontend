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
  const [chaptersToDisplay, setChaptersToDisplay] = useState<{
    [surahId: number]: { surah: Surah; numOfLessons: number };
  }>({});
  const [hasSet, setHasSet] = useState(false);

  useEffect(() => {
    async function fetchChapters() {
      const tempChapters: {
        [surahId: number]: { surah: Surah; numOfLessons: number };
      } = {};

      for (let index = 1; index < 115; index++) {
        try {
          const lessons = await surahs.getSurahLessons(index);
          if (lessons.length) {
            const surah = await surahs.getSurahInformation(index);
            tempChapters[index] = {
              surah: surah,
              numOfLessons: lessons.length,
            };
          }
        } catch (error) {
          console.error(`Error fetching lessons for surahId ${index}:`, error);
        }
      }

      if (!hasSet) {
        setChaptersToDisplay(tempChapters);
        setHasSet(true);
      }
      console.log(chaptersToDisplay);
    }
    fetchChapters();
  }, [chaptersToDisplay, hasSet]);

  return (
    <>
      <NavBar />
      <ResponsiveContainer>
        <Sidebar chapterData={chapterData} lessonData={lessonData} />
      </ResponsiveContainer>
    </>
  );
};
