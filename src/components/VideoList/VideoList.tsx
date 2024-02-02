import React from 'react';
import styled from 'styled-components';
import {
  VideoListHeader,
  VideoListHeaderProps,
} from '../VideoListHeader/VideoListHeader';
import {
  VideoButtonCard,
  VideoButtonCardProps,
} from '../VideoButtonCard/VideoButtonCard';

/**
 * Represents the props for the VideoListProps component.
 *
 * @interface VideoListProps
 * @property {VideoListHeaderProps} headerDetails - The video list chapter header details.
 * @property {Array<VideoButtonCardProps>} allVideos - The array of VideoButtonCardProps representing all the videos.
 */
interface VideoListProps {
  headerDetails: VideoListHeaderProps;
  allVideos: Array<VideoButtonCardProps>;
}

/**
 * Represents the styled component for the sidebar div.
 */
const VideoListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * Renders a list of video button components with a header.
 *
 * @param {VideoListProps} headerDetails - The header details for the video list.
 * @param {Array<VideoButtonCardProps>} allVideos - An array of video details.
 * @returns {JSX.Element} - The rendered video list component.
 */
export const VideoList = ({
  headerDetails,
  allVideos,
}: VideoListProps): JSX.Element => {
  return (
    <VideoListDiv>
      <VideoListHeader
        surahName={headerDetails.surahName}
        nameTranslation={headerDetails.nameTranslation}
        surahNameArabic={headerDetails.surahNameArabic}
        numberOfVerses={headerDetails.numberOfVerses}
      />
      {allVideos.map((video, index) => (
        <VideoButtonCard
          key={index} // Add a unique key for each mapped component
          videoNumber={video.videoNumber}
          totalVideos={video.totalVideos}
          verseStart={video.verseStart}
          verseEnd={video.verseEnd}
          surahName={video.surahName}
        />
      ))}
    </VideoListDiv>
  );
};
