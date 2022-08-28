import * as React from 'react';
import { Button, Container, Grid, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Link } from "react-scroll";

const AyahButton = (props) => {

    return (
        <Grid container>
            <Grid item md={3}>
                <Link activeClass="active" spy={true} smooth={true} offset={-50} duration={400}>
                    <Button variant="contained" color="sage" disableElevation fullWidth>
                        <Grid container justifyContent="space-between" sx={{mb: -0.5}}>
                            <Grid item style={{ backgroundColor: "white"}} sx={{ height: 30, width: 30, borderRadius: '50%'}}><Typography variant="subtitle1">1</Typography></Grid>
                            <Grid item><Typography inline variant="body1" align="right"> وَٱلْعَـٰدِيَـٰتِ ضَبْحًۭا </Typography></Grid>
                        </Grid>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default AyahButton