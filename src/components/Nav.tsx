import * as React from 'react';
import QuranJourneyButton from './QuranJourneyButton';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Brightness6Icon from '@mui/icons-material/Brightness6';

const Nav = () => {
  return (
    <Container
      sx={{
        py: 5,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <QuranJourneyButton />
        </Grid>
        <Grid item>
          <IconButton color="inherit">
            <Brightness6Icon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Nav;
