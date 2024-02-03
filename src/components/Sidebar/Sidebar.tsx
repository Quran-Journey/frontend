import React, { useState } from 'react';
import styled from 'styled-components';
import { ChapterList, ChapterListProps } from '../ChapterList/ChapterList';
import { LessonList, LessonListProps } from '../LessonList/LessonList';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

export interface SidebarProps {
  chapterData: ChapterListProps;
  lessonData?: LessonListProps | undefined | null;
}

/**
 * Represents the styled component for the list div.
 */
const SidebarDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Sidebar = ({
  chapterData,
  lessonData = null,
}: SidebarProps): JSX.Element => {
  const [isChapterSelected, setChapterSelected] = useState(false);
  const [isLessonListDisabled, setLessonListDisabled] = useState(
    lessonData === null,
  );
  return (
    <SidebarDiv>
      {isLessonListDisabled ? (
        <>
          <ButtonGroup>
            <Button
              selected={isChapterSelected}
              onClick={() => setChapterSelected(true)}
            >
              Chapter
            </Button>

            <Button disabled={isLessonListDisabled}>
              Lessons / Chapter...
            </Button>
          </ButtonGroup>
          
          <ChapterList allChapters={chapterData.allChapters} />
        </>
      ) : (
        <>
          <ButtonGroup>
            <Button
              selected={isChapterSelected}
              onClick={() => setChapterSelected(true)}
            >
              Chapter
            </Button>
            {lessonData ? (
              <Button
                selected={!isChapterSelected}
                onClick={() => setChapterSelected(false)}
              >
                Lessons / {lessonData.headerDetails.surahName}{' '}
              </Button>
            ) : (
              <Button disabled={true}>Lessons</Button>
            )}
          </ButtonGroup>

          {isChapterSelected ? (
            <ChapterList allChapters={chapterData.allChapters} />
          ) : (
            <LessonList
              headerDetails={lessonData.headerDetails}
              allLessons={lessonData.allLessons}
            />
          )}
        </>
      )}
    </SidebarDiv>
  );
};
