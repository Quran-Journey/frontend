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

  const [allChapters, setAllChapters] = useState<Surah[]>([]);
  const [chaptersWithLessons, setChaptersWithLessons] = useState<{
    [key: number]: { surah: Surah; numOfLessons: number };
  }>({});

  async function fetchChaptersWithLessons() {
    try {
      const fetchedAllChapters = await surahs.getSurahs();
      setAllChapters(fetchedAllChapters);

      // Loop through each chapter and fetch the lessons
      const chapterLessonsCountMap: { [key: number]: number } = {};
      const chaptersWithLessonsMap: {
        [key: number]: { surah: Surah; numOfLessons: number };
      } = {};
      await Promise.all(
        fetchedAllChapters.map(async (chapter) => {
          if (chapter.surahId !== undefined) {
            try {
              const lessons = await surahs.getSurahLessons(chapter.surahId);
              if (lessons.length > 0) {
                chapterLessonsCountMap[chapter.surahId] = lessons.length;
                chaptersWithLessonsMap[chapter.surahId] = {
                  surah: chapter,
                  numOfLessons: lessons.length,
                };
              }
            } catch (error) {
              console.error(
                `Error fetching lessons for surahId ${chapter.surahId}:`,
                error,
              );
            }
          }
        }),
      );

      setChaptersWithLessons(chaptersWithLessonsMap);
      console.log('chapters with lessons: ', chaptersWithLessons);
    } catch (error) {
      console.error('Error fetching all chapter data:', error);
    }
  }

  useEffect(() => {
    fetchChaptersWithLessons();
  }, []);

  return (
    <>
      <NavBar />
      <ResponsiveContainer>
        <Sidebar chapterData={chapterData} lessonData={lessonData} />
      </ResponsiveContainer>
    </>
  );
};
