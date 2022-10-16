import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const VerseIntro = (props) => {
  return (
    <>
      <Grid item sx={{ mb: 1 }}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Typography variant="subtitle1" sx={{ color: '#727272' }}>
              {props.surah_num}:{props.verse_num}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5_ar" sx={{ color: '#727272' }}>
              سُوۡرَةُ {props.name_ar}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sx={{ pb: 2 }}>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={12} md={6} sx={{ pr: 1 }}>
            <Typography variant="body2">{props.translation}</Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ pl: 1 }}>
            <Box display="flex" justifyContent="flex-end">
              <Typography variant="h4_ar" align="right">
                {props.ayah} ({props.verse_num})
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default VerseIntro;
