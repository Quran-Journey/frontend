import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
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

const HoverGrid = styled(Grid)`
  ${({ theme }) => `
  cursor: pointer;
  border-top: solid;
  border-bottom: solid;
  border-width: 0.5px;
  border-color: #797979;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: inherit;
  transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    background-color: #F3EEFF;
    transform: scale(1.03);
  }
  `}
`;

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
      <HoverGrid container>
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
      </HoverGrid>
    </ThemeProvider>
  );
};
