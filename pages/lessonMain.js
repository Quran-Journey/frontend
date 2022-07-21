import * as React from 'react';
import Chip from '@mui/material/Chip';
import { Button, Container, Grid, Paper, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// import Nav from '../../components/Nav';
import Nav from '../components/Nav'
// import LessonCard from '../components/LessonCard'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';// import { ColorLensIcon } from '@mui/icons-material';
import Footer from '../components/Footer';
// import SideBar from '../components/SideBarTest';
import SideBar from '../components/SideBar'
import SectionButton from '../components/SectionButton';
import SurahIntroTitle from '../components/SurahIntroTitle';
import BodyText from '../components/BodyText';

const surah_details = {name: "Surah Al 'adiyat", name_ar: 'سُوۡرَةُ العَادیَات', verses: '11'}
const verse_data = [
    {verse: 1, 
    ayah: 'وَٱلْعَـٰدِيَـٰتِ ضَبْحًۭا',
    translation: '’ By the galloping, panting horses,',
    root_words: [{
        word: 'ٱلْعَـٰدِيَـٰتِ',
        root: '-root here-',
        blurb: '-sample text -'}],
    tafsir: 'sample tex-',
    reflections: ''}
]

console.log(verse_data)

export default function lessonMain () {
    return (
        <>
        <Nav />

        <Container sx={{ pb: 10 }}>
        <Button variant="outlined" color="dark" startIcon={ <ArrowCircleLeftRoundedIcon />}><a href="/lessonIntro" style={{textDecoration: 'none'}}>Back</a></Button>

        {/* <Grid container direction='column'>
            <Grid item>
                <Typography variant='h4'>
                    {verse_data[0].ayah} ({verse_data[0].verse})
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='h5'>
                    {verse_data[0].translation}
                </Typography>
            </Grid>
        </Grid> */}
        </Container>

        <Footer />
        </>
        
    )
}