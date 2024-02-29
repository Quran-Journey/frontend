import { Sidebar, SidebarProps } from '../Sidebar/Sidebar';
import {
  VideoPlayerSection,
  VideoPlayerSectionProps,
} from '../VideoPlayerSection/VideoPlayerSection';
import { NavBar } from '../NavBar/NavBar';
import styled from 'styled-components';
import { colours } from '@/styles/colours';
import { breakpoints } from '@/styles/breakpoints';

/**
 * Interface for the VideoPlayerPageProps.
 *
 * @interface VideoPlayerPageProps
 * @property {VideoPlayerSectionProps} videoPlayerSectionData - The data for the video player section.
 * @property {SidebarProps} sidebarData - The data for the sidebar.
 */
export interface VideoPlayerPageProps {
  videoPlayerSectionData: VideoPlayerSectionProps;
  sidebarData: SidebarProps;
}

/**
 * Styled component for setting side margins.
 */
const SideMargins = styled.div`
  margin: 0 80px;

  @media (${breakpoints.lg}) {
    margin: 0 50px;
  }

  @media (${breakpoints.md}) {
    margin: 0 30px;
  }
  @media (${breakpoints.sm}) {
    margin: 0 10px;
  }
`;

/**
 * Styled component for a container with flex layout and space between items.
 */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

/**
 * Defines a styled component called SidebarColumn.
 */
const SidebarColumn = styled.div`
  width: 30%;
  border-right: 0.25px solid ${colours.grey};

  @media (${breakpoints.lg}) {
    width: 40%;
  }
`;

/**
 * Defines a styled component called VideoColumn.
 */
const VideoColumn = styled.div`
  width: 65%;
  margin-top: 22px;
  @media (${breakpoints.lg}) {
    width: 55%;
  }
`;

/**
 * Renders the VideoPlayerPage component.
 *
 * @param {VideoPlayerPageProps} videoPlayerSectionData - The data for the video player section.
 * @param {VideoPlayerPageProps} sidebarData - The data for the sidebar.
 * @returns {JSX.Element} The rendered VideoPlayerPage component.
 */
export const VideoPlayerPage = ({
  videoPlayerSectionData,
  sidebarData,
}: VideoPlayerPageProps): JSX.Element => {
  return (
    <>
      <NavBar></NavBar>
      <SideMargins>
        <Container>
          <SidebarColumn>
            <Sidebar
              chapterData={sidebarData.chapterData}
              lessonData={sidebarData.lessonData}
            ></Sidebar>
          </SidebarColumn>
          <VideoColumn>
            <VideoPlayerSection
              headerData={videoPlayerSectionData.headerData}
              srcPDF={videoPlayerSectionData.srcPDF}
              srcVideo={videoPlayerSectionData.srcVideo}
              pdfDownloadData={videoPlayerSectionData.pdfDownloadData}
            ></VideoPlayerSection>
          </VideoColumn>
        </Container>
      </SideMargins>
    </>
  );
};
