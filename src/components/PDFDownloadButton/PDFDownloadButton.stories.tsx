import type { Meta, StoryObj } from '@storybook/react';
import { PDFDownloadButton } from './PDFDownloadButton';

// Meta information for the PDFDownloadButton component
const meta: Meta<typeof PDFDownloadButton> = {
  title: 'Molecular/PDFDownloadButton',
  component: PDFDownloadButton,
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the PDFDownloadButton component
type Story = StoryObj<typeof PDFDownloadButton>;

// Main story showcasing the PDFDownloadButton component
export const Main: Story = {
  args: {
    verseStart: '1',
    verseEnd: '10',
    surahName: 'Ali ‘Imran',
  },
};
