import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme/theme';
import { Label } from '../Label/Label';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { MainButton } from '../MainButton/MainButton';

interface LessonTitleProps {
  surahNameEn: string;
  surahNameTranslation: string;
  surahNameAr: string;
  surahVerses: string;
  introSections: Array<string>;
  buttonLabel: string;
}

export const LessonTitle = ({
  surahNameEn,
  surahNameTranslation,
  surahNameAr,
  surahVerses,
  introSections,
  buttonLabel,
  ...props
}: LessonTitleProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          <Grid container direction="column" alignItems="flex-start">
            <Grid item>
              <Typography variant="h4">{surahNameEn}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                {surahNameTranslation}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row" sx={{ mt: 2 }}>
                {introSections.map((section) => {
                  return (
                    <Grid key={section} item sx={{ mr: 0.75 }}>
                      <Label label={section} color="periwinkle" />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="flex-end">
            <Grid item>
              <Typography variant="h3_ar"> {surahNameAr}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{surahVerses} verses </Typography>
            </Grid>
            <Grid item sx={{ mt: 2 }}>
              <MainButton
                color="black"
                label={buttonLabel}
                size="small"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
