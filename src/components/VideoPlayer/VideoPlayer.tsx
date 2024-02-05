import React from 'react';
import styled from 'styled-components';

/**
 * Interface for the VideoPlayerProps.
 * @property {string} src - The source of the video.
 */
export interface VideoPlayerProps {
  src: string;
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
 * @returns {JSX.Element} The rendered video player component.
 */
export const VideoPlayer = ({ src }: VideoPlayerProps): JSX.Element => {
  return <VideoiFrame src={src} />;
};
