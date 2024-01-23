import type { Meta, StoryObj } from '@storybook/react';

import { PDFEmbed } from './PDFEmbed';

// Meta information for the PDFEmbed component
const meta: Meta<typeof PDFEmbed> = {
  title: 'Molecular/PDFEmbed',
  component: PDFEmbed,
  tags: ['autodocs'],
};

export default meta;

// Defining the Story type based on the PDFEmbed component
type Story = StoryObj<typeof PDFEmbed>;

// Story showcasing the disabled state of the PDFEmbed
export const Main: Story = {
  args: {
    src: 'https://www.alislam.org/quran/Holy-Quran-English.pdf',
  },
};
