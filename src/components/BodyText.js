import * as React from 'react';
import Grid from '@mui/material/Grid';
import HighlightedText from './HighlightedText';
import StandardText from './StandardText';

const BodyText = (props) => {
  return (
    <Grid container>
      {props.highlighted ? (
        <HighlightedText heading={props.heading} content={props.content} />
      ) : (
        <StandardText heading={props.heading} content={props.content} />
      )}
    </Grid>
  );
};

export default BodyText;
