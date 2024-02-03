import React from 'react';
import styled from 'styled-components';
import { ChapterListHeader } from '../ChapterListHeader/ChapterListHeader';
import {
  ChapterButtonCardProps,
  ChapterButtonCard,
} from '../ChapterButtonCard/ChapterButtonCard';

/**
 * Represents the props for the ChapterList component.
 * @interface ChapterListProps
 * @property {Array<ChapterButtonCardProps>} allChapters - The array of ChapterButtonCardProps representing all the chapters.
 */
interface ChapterListProps {
  allChapters: Array<ChapterButtonCardProps>;
}

/**
 * Represents the styled component for the list div.
 */
const ListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * Renders the list component for the chapter list.
 *
 * @param {ChapterListProps} allChapters - The array of ChapterButtonCards to be displayed in the list.
 * @returns {JSX.Element} The rendered list component.
 */
export const ChapterList = ({ allChapters }: ChapterListProps): JSX.Element => {
  return (
    <ListDiv>
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
    </ListDiv>
  );
};
