import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ChapterList, ChapterListProps } from '../ChapterList/ChapterList';
import { LessonList, LessonListProps } from '../LessonList/LessonList';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { breakpoints } from '@/styles/breakpoints';
import { ChapterButtonCardProps } from '../ChapterButtonCard/ChapterButtonCard';
import Surah from '@/models/surah/surah';
import surahs from '../../api/surahs';
import Lesson from '@/models/lesson/lesson';

/**
 * Interface for the Sidebar component props.
 *
 * @param {ChapterListProps} chapterData - The data for the ChapterList component.
 * @param {LessonListProps | undefined | null} lessonData - The data for the LessonList component, which is optional and can be undefined or null.
 */
export interface SidebarProps {
  chapterData: Array<ChapterButtonCardProps>;
  lessonData?: LessonListProps | undefined | null;

  apiData?: { [surahId: number]: { surah: Surah; numOfLessons: number } };
}

/**
 * Represents the styled component for the list div.
 */
const SidebarContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * Styled div with responsive margins
 */
const Margin = styled.div`
  margin: 0 10px;
`;

const SidebarDiv = styled.div`
  overflow-y: auto; /* Enable vertical scrolling seprate from the parent page*/

  margin: 22px 10px;
  padding-bottom: 100px;

  transition: all 0.3s ease;

  @media (${breakpoints.md}) {
    margin: 20px 10px;
    padding-bottom: 50px;
  }

  @media (${breakpoints.sm}) {
    margin: 10px 8px;
    padding-bottom: 50px;
  }

  @media (${breakpoints.xs}) {
    margin: 8px 5px;
    padding-bottom: 50px;
  }
`;

/**
 * Renders a sidebar component that displays a chapter list and/or a lesson list.
 *
 * @param {Object} chapterData - The data for the chapter list.
 * @param {Object} lessonData - The data for the lesson list (optional).
 * @returns {JSX.Element} The rendered sidebar component.
 */
export const Sidebar = ({
  chapterData,
  lessonData = null,
  apiData,
}: SidebarProps): JSX.Element => {
  /* Setting variables to allow chapter and lesson buttons to toggle or disable lesson button */
  const [isChapterSelected, setChapterSelected] = useState(true);
  const [isLessonListDisabled, setLessonListDisabled] = useState(true);
  const [fetchedLessonData, setFetchedLessonData] = useState<Lesson[]>([]);
  const [headerDetails, setHeaderDetails] = useState<{
    surahName?: string;
    nameTranslation?: string;
    surahNameArabic?: string;
    numberOfVerses?: string;
  }>();

  const handleChapterClick = (surahId: number) => {
    console.log(`Surah ${surahId} clicked`);

    fetchChapterLessons(surahId);
    setLessonListDisabled(false);
    setChapterSelected(false);
    if (apiData) {
      setHeaderDetails({
        surahName: apiData[surahId].surah.nameComplex,
        nameTranslation: 'temp',
        surahNameArabic: apiData[surahId].surah.nameArabic + 'سُوۡرَةُ ',
        numberOfVerses: 'temp',
      });
    }

    console.log(fetchedLessonData);
  };

  async function fetchChapterLessons(surahId: number) {
    try {
      const lessons = await surahs.getSurahLessons(surahId);

      setFetchedLessonData(lessons);
    } catch (error) {
      console.error(`Error fetching lessons for surahId ${surahId}:`, error);
    }
  }

  return (
    <SidebarDiv>
      <SidebarContent>
        {isLessonListDisabled ? (
          <>
            {/* If LessonList is disabled, render only chapter list with disabled lesson button and chapter button */}
            <Margin>
              <ButtonGroup>
                <Button
                  selected={isChapterSelected}
                  onClick={() => setChapterSelected(true)}
                >
                  Chapter
                </Button>

                <Button disabled={isLessonListDisabled}>
                  Lessons / Choose a Chapter
                </Button>
              </ButtonGroup>
            </Margin>
            <ChapterList
              chapterData={chapterData}
              apiData={apiData}
              onChapterClick={handleChapterClick}
            />
          </>
        ) : (
          <>
            {/* If LessonList is not disabled, render both chapter and lesson buttons and lists */}
            <Margin>
              <ButtonGroup>
                <Button
                  selected={isChapterSelected}
                  onClick={() => setChapterSelected(true)}
                >
                  Chapter
                </Button>

                {/* Ensure lessonData is not null to avoid typescript errors */}
                {headerDetails && (
                  <Button
                    selected={!isChapterSelected}
                    onClick={() => setChapterSelected(false)}
                  >
                    Lessons / {headerDetails.surahName}{' '}
                  </Button>
                )}
              </ButtonGroup>
            </Margin>

            {isChapterSelected ? (
              /* Render chapter list if it is selected */
              <ChapterList
                chapterData={chapterData}
                apiData={apiData}
                onChapterClick={handleChapterClick}
              />
            ) : (
              <>
                {/* Render lesson list if it is selected */}
                {/* Ensure lessonData is not null to avoid typescript errors */}
                {fetchedLessonData && (
                  <LessonList
                    // headerDetails={lessonData.headerDetails}
                    // allLessons={lessonData.allLessons}
                    surahName={headerDetails?.surahName}
                    nameTranslation={headerDetails?.nameTranslation}
                    surahNameArabic={headerDetails?.surahNameArabic}
                    numberOfVerses={headerDetails?.numberOfVerses}
                    lessonList={fetchedLessonData}
                  />
                )}
              </>
            )}
          </>
        )}
      </SidebarContent>
    </SidebarDiv>
  );
};
