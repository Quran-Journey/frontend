import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints';
import { colours } from '../../styles/colours';
import { Typography } from '../Typography/Typography';
import { Sidebar, SidebarProps } from '../Sidebar/Sidebar';
import { IconButton } from '../IconButton/IconButton';
import { CaretRightFill, CaretLeftFill } from '@styled-icons/bootstrap';
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

interface SidebarDropdownProps {
  surahName: string;
}

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

const TextButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 7px;

  border: none;
  border-bottom: 3px solid ${colours.white};
  background-color: ${colours.white};

  cursor: pointer;

  transition: border 0.2s ease;

  &:active {
    border-bottom: 3px solid ${colours.emrald};
  }

  &:hover {
    border-bottom: 3px solid ${colours.emrald};
  }
`;

const DropdownButtonDiv = styled.div`
  position: fixed;
  top: 57px;
  z-index: 101;
  width: 100%;

  padding: 10px 25px 0px 20px;

  background-color: ${colours.white};
  border-bottom: 0.25px solid ${colours.grey};

  transition: padding 0.3s ease, top 0.3s ease;

  @media (${breakpoints.lg}) {
    padding: 10px 25px 0px 20px;
  }

  @media (${breakpoints.md}) {
    top: 54px;
  }

  @media (${breakpoints.xs}) {
    padding: 7px 10px 0px 5px;
    top: 43px;
  }
`;

export const SidebarContainer = styled.div<{
  isOpen: boolean;
  isSidebarDropdownButtonTop: boolean;
}>`
  position: fixed;
  top: 90px;
  left: ${({ isOpen }) => (isOpen ? '0' : '-50%')}; /* Adjust width as needed */
  width: 50%;
  height: 100%;
  z-index: 99;

  transform: translateY(
    ${({ isSidebarDropdownButtonTop }) =>
      isSidebarDropdownButtonTop ? '0' : '-60px'}
  );

  transition: left 0.3s ease, transform 0.3s ease, width 0.3s ease;

  background-color: ${colours.white};
  overflow-y: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (${breakpoints.md}) {
    top: 80px;
    width: 75%;

    left: ${({ isOpen }) => (isOpen ? '0' : '-75%')};
  }

  @media (${breakpoints.sm}) {
    width: 85%;

    left: ${({ isOpen }) => (isOpen ? '0' : '-85%')};
  }

  @media (${breakpoints.xs}) {
    width: 100%;
    top: 70px;

    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  }
`;

export const SidebarDropdown = ({ surahName }: SidebarDropdownProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [isSidebarDropdownButtonTop, setIsSidebarDropdownButtonTop] =
    useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Handles the scroll event and updates the visibility of the navigation bar based on the scroll position.
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsSidebarDropdownButtonTop(
        prevScrollPos > currentScrollPos || currentScrollPos <= 0,
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const button = document.getElementById('sidebar-button');
      if (sidebar && button) {
        if (
          !sidebar.contains(event.target as Node) &&
          !button.contains(event.target as Node)
        ) {
          setSidebarOpen(false);
          console.log('Clicked outside the sidebar!');
        }
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleSidebar = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <DropdownButtonDiv
        style={{
          transform: isSidebarDropdownButtonTop
            ? 'translateY(0)'
            : 'translateY(-166%)',
          transition: 'transform 0.3s ease',
        }}
      >
        <TextButton id="sidebar-button" onClick={toggleSidebar}>
          <Typography variant="subtitle1">{surahName}</Typography>
          <IconButton
            icon={isSidebarOpen ? <CaretLeftFill /> : <CaretRightFill />}
            colour={colours.white}
            size="small"
          />
        </TextButton>
      </DropdownButtonDiv>

      <SidebarContainer
        id="sidebar"
        isOpen={isSidebarOpen}
        isSidebarDropdownButtonTop={isSidebarDropdownButtonTop}
      >
        <Sidebar
          chapterData={lessonData.chapterData}
          lessonData={lessonData.lessonData}
        />
      </SidebarContainer>
    </>
  );
};
