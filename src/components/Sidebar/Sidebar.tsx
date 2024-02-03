import React, { useState } from 'react';
import styled from 'styled-components';
import { ChapterList, ChapterListProps } from '../ChapterList/ChapterList';
import { LessonList, LessonListProps } from '../LessonList/LessonList';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import { breakpoints } from '@/styles/breakpoints';

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

const Margin = styled.div`
  margin: 0 10px;
`;

const SidebarDiv = styled.div`
  margin: 22px 10px;

  @media (${breakpoints.xl}) {
    margin: 20px 10px;
  }

  @media (${breakpoints.lg}) {
    margin: 20px 10px;
  }

  @media (${breakpoints.md}) {
    margin: 20px 10px;
  }

  @media (${breakpoints.sm}) {
    margin: 10px 8px;
  }

  @media (${breakpoints.xs}) {
    margin: 8px 5px;
  }
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
      <SidebarContent>
        {isLessonListDisabled ? (
          <>
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
            <Margin>
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
            </Margin>

            {isChapterSelected ? (
              <ChapterList allChapters={chapterData.allChapters} />
            ) : (
              <>
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
