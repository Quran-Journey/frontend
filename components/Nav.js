import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material';
// import Brightness6Icon from '@mui/icons-material/Brightness6';
// import { ColorLensIcon } from '@mui/icons-material';
// import ColorLensIcon from '@mui/icons-material/ColorLens';

const Nav = () => {
    return (
      <Container sx={{
        py: 5
      }}>
        <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
            <Grid item>
                <Typography variant='h6'>
                    Quran Journey
                </Typography>
            </Grid>
            <Grid item>
                {/* <IconButton>
                    <ColorLensIcon />
                </IconButton>  Error: Element type is invalid: expected a string*/}
                <Typography variant='h6'>
                    O
                </Typography>
            </Grid>
        </Grid>
      </Container>
    )
  }
  
  export default Nav