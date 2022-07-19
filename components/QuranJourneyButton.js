import * as React from 'react';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { Button, Container, Grid, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography';

const QuranJourneyButton = () => {
    return (
        <Grid container
              direction="row"
              justifyContent="flex-start"
              alignItems="center">
               
        
            <Grid item>
            <IconButton color="dark">
                <DarkModeRoundedIcon />
            </IconButton>  
            </Grid>
            <Grid item>
            <Typography variant='h6'>
                Quran Journey
            </Typography>
            </Grid>
        </Grid>

    )
}

export default QuranJourneyButton
