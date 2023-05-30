import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme/theme';
import { CircleIconButton } from '../CircleIconButton/CircleIconButton';
import { Label } from '../Label/Label';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

interface SurahLessonCardProps {
  /**
   * Surah number as listed in the Quran
   */
  surahNumber: string;
  /**
   * Surah name transliterated in English
   */
  surahNameEn: string;
  /**
   * Surah name translated in English
   */
  surahNameTranslation: string;
  /**
   * Surah name in Arabic
   */
  surahNameAr: string;
  /**
   * Number of verses within the surah
   */
  surahVerses: string;
  /**
   * Number of sub lessons associated with the surah
   */
  numberOfLessons: string;
  /**
   * Type of Surah (Median or Makki)
   */
  surahType: 'Median'
  | 'Makki';
}

/**
 * Styled grid element for hover effect
 */
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

/**
 * Surah lesson card used within side bar
 */
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
      <HoverGrid container direction="row">
        <Grid item xs={2.25} sm={1.25} md={1} lg={0.75} >
          <Label
            color="lavendar"
            label={surahNumber}
            fontWeight={'600'}
            size="small"
          />
        </Grid>
        <Grid item xs={9.75} sm={10.75} md={11} lg={11.25}>
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
      </HoverGrid>
    </ThemeProvider>
  );
};
