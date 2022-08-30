import * as React from 'react';
import Chip from '@mui/material/Chip';
import { Button, Container, Grid, Paper, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Nav from './Nav'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';// import { ColorLensIcon } from '@mui/icons-material';
import Footer from './Footer';
//import SideBar from './SideBarTest';
import SectionButton from './SectionButton';

const DetailedSurahTitle = (props) => {
    return (
        <Grid container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start" sx={{ mb:4, px: 1 }}>
            <Grid item sx={{ width: '100%'}}>
                    <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                    <Grid item>
                        
                        <Grid container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-start">
                            <Grid item>
                                <Typography variant="h5" sx={{ mb: 0 }}>
                                    {props.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle2">
                                    Surah 100                   
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="flex-end">
                            <Grid item>
                                <Typography variant="h4_ar">
                                    {props.name_ar}                        
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle2">
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

export default DetailedSurahTitle;