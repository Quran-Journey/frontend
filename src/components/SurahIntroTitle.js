import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { useRouter } from 'next/router';

const SurahIntroTitle = (props) => {
  const router = useRouter();

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ mb: 6 }}
    >
      <Grid item sx={{ width: '100%' }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h3" sx={{ mb: 1 }}>
              {props.name}
            </Typography>
            <Button
              variant="outlined"
              color="dark"
              startIcon={<ArrowCircleRightRoundedIcon />}
              onClick={() => {
                router.push({
                  pathname: '/lesson/' + props.id + '/[page]',
                  query: { page: 'content' },
                });
              }}
            >
              Go to Lecture
            </Button>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-end"
            >
              <Grid item>
                <Typography variant="h3_ar">{props.name_ar}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">
                  {props.verses} Ayahs
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SurahIntroTitle;
