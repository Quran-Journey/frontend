import React from 'react';
import styled from 'styled-components';
import { ChapterListHeader } from '../ChapterListHeader/ChapterListHeader';
import {
  ChapterButtonCardProps,
  ChapterButtonCard,
} from '../ChapterButtonCard/ChapterButtonCard';
import Surah from '@/models/surah/surah';

/**
 * Represents the props for the ChapterList component.
 * @interface ChapterListProps
 * @property {Array<ChapterButtonCardProps>} chapterData - The array of ChapterButtonCardProps representing all the chapters.
 */
export interface ChapterListProps {
  chapterData: Array<ChapterButtonCardProps>;
  apiData?: {
    [surahId: number]: { surah: Surah; numOfLessons: number };
  };
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
export const ChapterList = ({
  chapterData,
  apiData,
}: ChapterListProps): JSX.Element => {
  // Transform the chaptersToDisplay object to an array of ChapterButtonCardProps

  function returnApiChapterButtonCard() {
    if (apiData) {
      const chapterDataInfo = Object.values(apiData).map(
        ({ surah, numOfLessons }) => (
          <ChapterButtonCard
            key={surah.surahId} // Add a unique key for each mapped component
            onClick={() => console.log(`Surah ${surah.surahId} clicked`)}
            surahName={surah.nameComplex || ''}
            nameTranslation={'Translation Placeholder'}
            surahNameArabic={surah.nameArabic || 'سُورَة'}
            numberOfVerses={'000'}
            surahNumber={surah.surahNumber || '00'}
            numberOfVideos={numOfLessons}
          />
        ),
      );

      return chapterDataInfo;
    } else {
      const chapterDataInfo = chapterData.map((chapter, index) => (
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
      ));

      return chapterDataInfo;
    }
  }

  console.log('In chapterList: ', apiData);
  return (
    <ListDiv>
      <ChapterListHeader />
        {returnApiChapterButtonCard()}
    </ListDiv>
  );
};
