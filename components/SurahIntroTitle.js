import * as React from 'react';
import Chip from '@mui/material/Chip';
import { Button, Container, Grid, Paper, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Nav from './Nav'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';// import { ColorLensIcon } from '@mui/icons-material';
import Footer from './Footer';
import SideBar from './SideBarTest';
import SectionButton from './SectionButton';

const SurahIntroTitle = (props) => {
    return (
        <Grid container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start" sx={{mb:6}}>
            <Grid item sx={{ width: '100%'}}>
                    <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Grid item>
                        <Typography variant="h3" sx={{ mb: 1 }}>
                            {props.name}
                        </Typography>
                        <Button variant="outlined" color="dark" startIcon={ <ArrowCircleRightRoundedIcon />}>Go to Lecture</Button>
                    </Grid>
                    <Grid item>
                        <Grid container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-end">
                            <Grid item>
                                <Typography variant="h3_ar">
                                    {props.name_ar}                        
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    {props.verses} Ayahs                   
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SurahIntroTitle;