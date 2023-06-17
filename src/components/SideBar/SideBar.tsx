import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme/theme';
import { CircleIconButton } from '../CircleIconButton/CircleIconButton';
import { Label } from '../Label/Label';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {
  SurahLessonCard,
  SurahLessonCardProps,
} from '../SurahLessonCard/SurahLessonCard';

export interface SideBarProps {
  lessonCardsList: Array<{ lessonCardData: SurahLessonCardProps }>;
}

const SideBarGrid = styled(Grid)`
  ${({ theme }) => `
border-right: solid;
border-width: 0.5px;
border-color: #797979;
background-color: inherit;
`}
`;

export const SideBar = ({ lessonCardsList, ...props }: SideBarProps) => {
  return (
    <ThemeProvider theme={theme}>

    <SideBarGrid container direction="column" justifyContent="flex-start" sx={{px:7}} lg={7}>
        <Grid item sx={{pt: 3, pb: 3}}>
            <Typography variant='h4'>
                Surah Lessons
            </Typography>
        </Grid>
      {lessonCardsList.map((lessonCard) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Grid item>
            <SurahLessonCard
              numberOfLessons={lessonCard.numberOfLessons}
              surahNameAr={lessonCard.surahNameAr}
              surahNameEn={lessonCard.surahNameEn}
              surahNameTranslation={lessonCard.surahNameTranslation}
              surahNumber={lessonCard.surahNumber}
              surahType={lessonCard.surahType}
              surahVerses={lessonCard.surahVerses}
            />
          </Grid>
        );
      })}
    </SideBarGrid>
    </ThemeProvider>

  );
};
