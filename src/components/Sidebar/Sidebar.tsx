import React, { useState } from 'react';
import styled from 'styled-components';
import { ChapterList, ChapterListProps } from '../ChapterList/ChapterList';
import { LessonList, LessonListProps } from '../LessonList/LessonList';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { breakpoints } from '@/styles/breakpoints';

/**
 * Interface for the Sidebar component props.
 *
 * @param {ChapterListProps} chapterData - The data for the ChapterList component.
 * @param {LessonListProps | undefined | null} lessonData - The data for the LessonList component, which is optional and can be undefined or null.
 */
export interface SidebarProps {
  chapterData: ChapterListProps;
  lessonData?: LessonListProps | undefined | null;
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
  padding-bottom: 35px;

  transition: all 0.3s ease;

  @media (${breakpoints.md}) {
    margin: 20px 10px;
    padding-bottom: 25px;
  }

  @media (${breakpoints.sm}) {
    margin: 10px 8px;
    padding-bottom: 25px;
  }

  @media (${breakpoints.xs}) {
    margin: 8px 5px;
    padding-bottom: 20px;
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
}: SidebarProps): JSX.Element => {
  /* Setting variables to allow chapter and lesson buttons to toggle or disable lesson button */
  const [isChapterSelected, setChapterSelected] = useState(true);
  const [isLessonListDisabled, setLessonListDisabled] = useState(
    lessonData === null,
  );
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
            <ChapterList allChapters={chapterData.allChapters} />
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
                {lessonData && (
                  <Button
                    selected={!isChapterSelected}
                    onClick={() => setChapterSelected(false)}
                  >
                    Lessons / {lessonData.headerDetails.surahName}{' '}
                  </Button>
                )}
              </ButtonGroup>
            </Margin>

            {isChapterSelected ? (
              /* Render chapter list if it is selected */
              <ChapterList allChapters={chapterData.allChapters} />
            ) : (
              <>
                {/* Render lesson list if it is selected */}
                {/* Ensure lessonData is not null to avoid typescript errors */}
                {lessonData && (
                  <LessonList
                    headerDetails={lessonData.headerDetails}
                    allLessons={lessonData.allLessons}
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
