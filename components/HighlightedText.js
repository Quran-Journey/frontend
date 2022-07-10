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
import SmallParagraph from './SmallParagraph';

const HighlightedText = (props) => {
    const id = props.heading.replace(/\s+/g, '-')

    return (
        <Grid container sx={{ mt: 2, backgroundColor: '#EEF1EC', py: 3, px: 4, borderRadius: '32px', width: '100%' }}>
            <Grid item id={id}>
                <Typography variant='h5' sx={{ mb: 1 }}>
                    {props.heading}
                </Typography>
                
                {props.content.map((content) =>
                <SmallParagraph content={content}/>
                )}

            </Grid>
        </Grid>
    )
}

export default HighlightedText