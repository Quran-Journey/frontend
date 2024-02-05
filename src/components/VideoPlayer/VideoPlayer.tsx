import React from 'react';
import styled from 'styled-components';

interface VideoPlayerProps {
  src: string;
}

const VideoiFrame = styled.iframe`
  min-width: 100%;
  aspect-ratio: 16 / 9;
`;

export const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return <VideoiFrame src={src} />;
};
