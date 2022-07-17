import * as React from 'react';
import Chip from '@mui/material/Chip';
import { Button, Container, Grid, Paper, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Nav from './Nav'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';// import { ColorLensIcon } from '@mui/icons-material';
import Footer from './Footer';
import SideBar from './SideBar';
import SectionButton from './SectionButton';
import HighlightedText from './HighlightedText';
import StandardText from './StandardText';

const BodyText = (props) => {
    return (
        <Grid container>
            {props.highlighted ? <HighlightedText heading={props.heading} content={props.content}/> : <StandardText heading={props.heading} content={props.content}/>}
        </Grid>
    )
}

export default BodyText