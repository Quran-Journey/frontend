import * as React from 'react';
import Typography from '@mui/material/Typography';

interface Props {
  content: string;
}

export default function RegularParagraph({ content }: Props) {
  return (
    <Typography variant="body1" sx={{ mb: 3 }}>
      {content}
    </Typography>
  );
}
