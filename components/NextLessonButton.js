import * as React from 'react';
import { Button, Container, Grid, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Link } from "react-scroll";

const NextLessonButton = (props) => {

    return (
        <Grid container>
            <Grid item md={3}>
                <Link activeClass="active" spy={true} smooth={true} offset={-50} duration={400}>
                    <Button variant="contained" disableElevation fullWidth sx={{backgroundColor:'#EEF1EC'}}>
                        <Grid container justifyContent="space-between">
                            
                            <Grid item sx={{ backgroundColor: "#CCECE9", height: 30, width: 30, borderRadius: '50%'}}><Typography variant="subtitle1">101</Typography></Grid>
                            <Grid item><Typography inline variant="body2"> Al-Qari'ah </Typography></Grid>
                            <Grid item><Typography inline variant="body1"> وَٱلْعَـٰدِيَـٰتِ ضَبْحًۭا </Typography></Grid>
                        </Grid>
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default NextLessonButton