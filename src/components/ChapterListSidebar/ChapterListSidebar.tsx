import React from 'react';
import styled from 'styled-components';
import { ChapterListHeader } from '../ChapterListHeader/ChapterListHeader';
import {
  ChapterButtonCardProps,
  ChapterButtonCard,
} from '../ChapterButtonCard/ChapterButtonCard';

/**
 * Represents the props for the ChapterListSidebar component.
 * @interface ChapterListSidebarProps
 * @property {Array<ChapterButtonCardProps>} allChapters - The array of ChapterButtonCardProps representing all the chapters.
 */
interface ChapterListSidebarProps {
  allChapters: Array<ChapterButtonCardProps>;
}

/**
 * Represents the styled component for the sidebar div.
 */
const SidebarDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * Renders the sidebar component for the chapter list.
 *
 * @param {ChapterListSidebarProps} allChapters - The array of ChapterButtonCards to be displayed in the sidebar.
 * @returns {JSX.Element} The rendered sidebar component.
 */
export const ChapterListSidebar = ({
  allChapters,
}: ChapterListSidebarProps): JSX.Element => {
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
