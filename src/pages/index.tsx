import * as React from 'react';
import { useState } from 'react';
import { Typography } from '@/components/Typography/Typography';
import { ResponsivePage } from '@/components/ResponsivePage/ResponsivePage';
import { Sidebar, SidebarProps } from '@/components/Sidebar/Sidebar';
import { Button } from '@/components/Button/Button';
import {
  sampleChapterData,
  sampleHeaader,
  sampleLessonData,
  sampleSrcPDF,
  sampleVideoHeader,
  samplePdfDownloadInfo,
  sampleVideoSrc,
} from '@/mock_data/storybook_mock_data';
import {
  VideoPlayerSectionProps,
  VideoPlayerSection,
} from '@/components/VideoPlayerSection/VideoPlayerSection';

const lessonData: SidebarProps = {
  chapterData: { allChapters: sampleChapterData },
  lessonData: {
    headerDetails: sampleHeaader,
    allLessons: sampleLessonData,
  },
};

const videoSectionData: VideoPlayerSectionProps = {
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
const Home: React.FC = (): JSX.Element => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <ResponsivePage>
      <Button onClick={toggleSidebar}>
        {isSidebarOpen ? 'Open Sidebar' : 'Close Sidebar'}
      </Button>
      {isSidebarOpen && (
        <Sidebar
          chapterData={lessonData.chapterData}
          lessonData={lessonData.lessonData}
        />
      )}

      {/* <Sidebar chapterData={lessonData.chapterData} lessonData={lessonData.lessonData}/> */}
      <VideoPlayerSection
        headerData={videoSectionData.headerData}
        srcPDF={videoSectionData.srcPDF}
        pdfDownloadData={videoSectionData.pdfDownloadData}
        srcVideo={videoSectionData.srcVideo}
      />
      {/* <Typography variant="h1">Welcome to Quran Journey</Typography>
      <div>
        <Typography variant="subtitle1">This is a placeholder page</Typography>
      </div> */}
    </ResponsivePage>
  );
};

export default Home;
