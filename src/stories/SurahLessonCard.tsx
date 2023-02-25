import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme';
import { CircleIconButton } from './CircleIconButton';
import { Label } from './Label';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/material';

interface SurahLessonCardProps {
  surahNumber: string;
  surahNameEn: string;
  surahNameTranslation: string;
  surahNameAr: string;
  surahVerses: string;
  numberOfLessons: string;
  surahType: string;
}

export const SurahLessonCard = ({
  surahNumber,
  surahNameEn,
  surahNameTranslation,
  surahNameAr,
  surahVerses,
  numberOfLessons,
  surahType,
  ...props
}: SurahLessonCardProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          borderTop: 0.5,
          borderBottom: 0.5,
          py: 2,
          borderColor: '#797979',
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
          sx={{
            mb: 2,
          }}
        >
          <Grid item>
            <Typography variant="h6">{surahNameEn}</Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: '#323334', fontSize: '13px' }}
            >
              {surahNameTranslation}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3_ar" sx={{ fontSize: '18px' }}>
              {surahNameAr}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: '#323334', fontSize: '13px' }}
            >
              {surahVerses} verses
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid item>
            <Grid container direction="row" spacing={0.5}>
              <Grid item>
                <Label color="periwinkle" label={numberOfLessons} />
              </Grid>
              <Grid item>
                <Label color="periwinkle" label={surahType} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <CircleIconButton
              ariaLabel="Open Button"
              color="black"
              icon={
                <ArrowCircleRightIcon
                  fontSize="large"
                  sx={{ transform: 'rotate(-45deg)' }}
                />
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
