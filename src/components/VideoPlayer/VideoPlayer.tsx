import React from 'react';
import styled from 'styled-components';

/**
 * Interface for the VideoPlayerProps.
 * @property {string} src - The source of the video.
 * @property {string} [title] - The title of the video used for accessibilty purposes.
 */
export interface VideoPlayerProps {
  src: string;
  title?: string;
}

/**
 * Styled component for rendering an iframe that span the full width of its parent div.
 */
const VideoiFrame = styled.iframe`
  min-width: 100%;
  aspect-ratio: 16 / 9;
`;

/**
 * Renders a video player component.
 *
 * @param {VideoPlayerProps} props - The props for the video player component.
 * @param {string} props.src - The source URL of the video.
 * @param {string} props.title - The title of the video player.
 * @returns {JSX.Element} The rendered video player component.
 */
export const VideoPlayer = ({
  src,
  title = 'Quran Journey - YouTube Video',
}: VideoPlayerProps): JSX.Element => {
  return (
    <VideoiFrame
      src={src}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};
