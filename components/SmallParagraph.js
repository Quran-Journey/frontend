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

const SmallParagraph = (props) => {
    return (
        <Typography variant="body2" sx={{ mt: 1}}>
            {props.content}
        </Typography>
    )
}

export default SmallParagraph