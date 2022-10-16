import * as React from 'react';
import Typography from '@mui/material/Typography';

const RegularParagraph = (props) => {
  return (
    <Typography variant="body1" sx={{ mb: 3 }}>
      {props.content}
    </Typography>
  );
};

export default RegularParagraph;
