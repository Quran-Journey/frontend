import * as React from 'react';
import Grid from '@mui/material/Grid';
import HighlightedText from './HighlightedText';
import StandardText from './StandardText';

interface Props {
  heading: string;
  content: string;
  highlighted: string;
}

export default function BodyText({ heading, content, highlighted }: Props) {
  return (
    <Grid container>
      {highlighted ? (
        <HighlightedText heading={heading} content={content} />
      ) : (
        <StandardText heading={heading} content={content} />
      )}
    </Grid>
  );
}
