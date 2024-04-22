import * as React from 'react';
import { useState, useEffect } from 'react';
import { ResponsiveContainer } from '@/components/ResponsivePage/ResponsiveContainer';
import { NavBar } from '@/components/NavBar/NavBar';
import {
  SidebarDropdown,
  SidebarDropdownProps,
} from '@/components/SidebarDropdown/SidebarDropdown';
import lessons from '../../api/lessons';
import Lesson from '@/models/lesson/lesson';

// TODO: Remove once fetch calls in place
import {
  sampleSrcPDF,
  sampleVideoHeader,
  samplePdfDownloadInfo,
  sampleVideoSrc,
} from '@/mock_data/storybook_mock_data';
import {
  VideoPlayerSectionProps,
  VideoPlayerSection,
} from '@/components/VideoPlayerSection/VideoPlayerSection';

export interface LessonPageProps {
  lessonId: number;
}

export interface LessonPage {
  videoSectionData: VideoPlayerSectionProps;
  sidebarDropdownData: SidebarDropdownProps;
}

// TODO: Remove once fetch calls in place
const videoSectionData1: VideoPlayerSectionProps = {
  headerData: sampleVideoHeader,
  srcPDF: sampleSrcPDF,
  pdfDownloadData: samplePdfDownloadInfo,
  srcVideo: sampleVideoSrc,
};

/**
 * Renders the Home component.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export const LessonPage: React.FC<LessonPageProps> = ({
  lessonId,
}): JSX.Element => {
  // TODO: fetch lesson page data here
  const [lesson, setLesson] = useState<Lesson | undefined>();

  useEffect(() => {
    async function fetchChapterData() {
      try {
        const fetchedChapterData = await lessons.getLessonById(lessonId);
        setLesson(fetchedChapterData);
      } catch (error) {
        console.error('Error fetching lesson data:', error);
      }
    }

    fetchChapterData();
  }, [lessonId]);

  console.log(lesson);

  return (
    <>
      <NavBar />
      <SidebarDropdown surahName={"Ali' Imran"} />
      <ResponsiveContainer>
        <VideoPlayerSection
          headerData={videoSectionData1.headerData}
          srcPDF={videoSectionData1.srcPDF}
          pdfDownloadData={videoSectionData1.pdfDownloadData}
          srcVideo={videoSectionData1.srcVideo}
        />
      </ResponsiveContainer>
    </>
  );
};
