import * as React from 'react';

import Typography from '@mui/material/Typography';
import { Button, Container, Grid, IconButton } from '@mui/material'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';// import { ColorLensIcon } from '@mui/icons-material';

const Footer = () => {
    return (
        <Container>
            <Grid container sx={{ pt: 10, borderTop: 1, pb: 15}}
            direction="row"
            alignItems="center"
            justifyContent="space-between">
                <Grid item>
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
                </Grid>
                <Grid item>
                    {/* Come back to this styling */}
                    <Typography vairant="h6" sx={{ color: '#727272', textTransform: 'uppercase', fontWeight: '700', fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif', fontSize: '0.9rem'}}>
                        © 2022 Quran Journey All Rights Reserved
                    </Typography>
                    
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer