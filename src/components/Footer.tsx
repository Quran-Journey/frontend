import * as React from 'react';
import QuranJourneyButton from './QuranJourneyButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <Container>
      <Grid
        container
        sx={{ pt: 10, borderTop: 1, pb: 15 }}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item>
          <QuranJourneyButton />
        </Grid>

        <Grid item>
          {/* Come back to this styling */}
          <Typography
            variant="h6"
            sx={{
              color: '#727272',
              textTransform: 'uppercase',
              fontWeight: '700',
              fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
              fontSize: '0.9rem',
            }}
          >
            © 2022 Quran Journey All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
