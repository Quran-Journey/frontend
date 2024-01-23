import React from 'react';
import styled from 'styled-components';
import { colours } from '../../styles/colours';

/**
 * Interface for the PDFEmbed component props.
 * @property {string} src - The source URL of the PDF file to be embedded.
 */
interface PDFEmbedProps {
  src: string;
}

// Styled component for a PDF container.
const PDFContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

// Renders an iframe element styled with CSS using styled-components.
const PDFDiv = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  background: ${colours.lightGrey};
`;

/**
 * Renders a PDF embed component.
 *
 * @param {string} src - The source URL of the PDF to be embedded.
 * @returns {JSX.Element} - The rendered PDF embed component.
 */
export const PDFEmbed = ({ src }: PDFEmbedProps): JSX.Element => {
  return (
    <PDFContainer>
      <PDFDiv src={src} />
    </PDFContainer>
  );
};
