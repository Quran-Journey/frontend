import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme/theme';
import { CircleIconButton } from '../CircleIconButton/CircleIconButton';
import { Label } from '../Label/Label';
import { Container, Grid, IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const HeaderContainer = styled(Container)`
  ${({ theme }) => `
border-bottom: solid;
border-width: 0.5px;
border-color: #797979;
padding-top: 15px;
padding-bottom: 15px;
padding-left: 15px;
padding-right: 15px;
background-color: inherit;
`}
`;

export const Header = () => {
  return (
    <HeaderContainer maxWidth={false} disableGutters>
      <Container maxWidth='xl' >
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h6">Quran Journey</Typography>
          </Grid>
          <Grid item>
            <IconButton color="inherit">
              <DarkModeIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </HeaderContainer>
  );
};
