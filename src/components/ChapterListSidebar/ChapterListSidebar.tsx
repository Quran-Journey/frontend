import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';

import { ChapterListHeader } from '../ChapterListHeader/ChapterListHeader';
import {
  ChapterButtonCardProps,
  ChapterButtonCard,
} from '../ChapterButtonCard/ChapterButtonCard';

interface ChapterListSidebarProps {
  allChapters: Array<ChapterButtonCardProps>;
}

const SidebarDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;



export const ChapterListSidebar = ({
    allChapters,
}: ChapterListSidebarProps) => {
  return (
    <SidebarDiv>
      <ChapterListHeader />
      {allChapters.map((chapter, index) => (
        <ChapterButtonCard
          key={index} // Add a unique key for each mapped component
          onClick={chapter.onClick}
          surahName={chapter.surahName}
          nameTranslation={chapter.nameTranslation}
          surahNameArabic={chapter.surahNameArabic}
          numberOfVerses={chapter.numberOfVerses}
          surahNumber={chapter.surahNumber}
          numberOfVideos={chapter.numberOfVideos}
        />
      ))}
    </SidebarDiv>
  );
};
