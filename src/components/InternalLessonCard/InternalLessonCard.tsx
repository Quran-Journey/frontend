import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme/theme';
import { CircleIconButton } from '../CircleIconButton/CircleIconButton';
import { Label } from '../Label/Label';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

interface InternalLessonCard {
  lessonNumber: string;
  verseSection: string;
  surahNameEn: string;
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
    background-color: #EBF1FA;
    transform: scale(1.03);
  }
  `}
`;

export const InternalLessonCard = ({
  lessonNumber,
  verseSection,
  surahNameEn,
  ...props
}: InternalLessonCard) => {
  return (
    <ThemeProvider theme={theme}>
      <HoverGrid container direction="row">
        <Grid item xs={3} sm={1.75} md={1.5} lg={1.25}>
          <Label
            color="periwinkle"
            label={"Lesson " + lessonNumber}
            fontWeight={'600'}
            size="small"
          />
        </Grid>
        <Grid item xs={8} sm={10.25} md={10.5} lg={10.75}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            
          >
            <Grid item>
              <Typography variant="h6">{verseSection}</Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: '#323334', fontSize: '13px' }}
              >
                {surahNameEn}
              </Typography>
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

