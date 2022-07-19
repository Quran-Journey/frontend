// Used for each individual lesson
// [id] is what shoes in the link on browser i.e. lesson/1
// Check https://www.youtube.com/watch?v=mTz0GXj8NN0&t=1s&ab_channel=TraversyMedia at 40:30 nested pages

// import {server} from '../config'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import { lessons } from '../mock_data/data'

import * as React from 'react';
import Chip from '@mui/material/Chip';
import { Button, Container, Grid, Paper, InputBase, IconButton, Link } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Nav from '../../../components/Nav';
// import LessonCard from '../components/LessonCard'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';// import { ColorLensIcon } from '@mui/icons-material';
import QuranJourneyButton from '../../../components/QuranJourneyButton';



export default function lessonIntro() {
    return (
        <>
        <Nav />
        <Container>
            <Grid container
            direction="row">
                <Grid item lg={9} sx={{ pr: 9, pb: 10 }}>
                    <Grid container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start">
                        <Grid item sx={{ width: '100%'}}>
                                <Grid container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            >
                                <Grid item>
                                    <Typography variant="h3" sx={{ mb: 1 }}>
                                        Surah Al 'adiyat
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
                                                سُوۡرَةُ العَادیَات                            
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1">
                                                11 Ayahs                            
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sx={{ mt: 8 }}>
                            <Typography variant='h4'>
                                Surah Info
                            </Typography>
                        </Grid>
                        <Grid item sx={{ mt: 2, backgroundColor: '#EEF1EC', py: 3, px: 4, borderRadius: '32px', width: '100%' }}>
                            <Typography variant="h5" sx={{ mb: 1 }}>
                                Name
                            </Typography>
                            <Typography variant="body2">
                            The Surah has been titled so after the word al 'adiyat with which it opens.
                            </Typography>
                        </Grid>
                        <Grid item sx={{ mt: 2, backgroundColor: '#EEF1EC', py: 3, px: 4, borderRadius: '32px', width: '100%' }}>
                            <Typography variant="h5" sx={{ mb: 1 }}>
                            Period of Revelation
                            </Typography>
                            <Typography variant="body2">
                            Makki: Abdullah bin Masud, Jabir, Hasan Basri, Ikrimah, and Ata
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 3}}>
                            Madani: Anas bin Malik, and Qatadah
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 3}}>

                            *Ibn Abbas two views have been reported, first that it is a Makki Surah, and second that it is Madani.
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 3}}>

                            But the subject matter of the Surah and its style clearly indicate that it is not only Makki but was revealed in the earliest stage in Makkah.
                            </Typography>
                        </Grid>
                        <Grid item sx={{ mt: 8 }}>
                            <Typography variant='h4'>
                                Theme and Subject Matter
                            </Typography>
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <Typography variant='body1'>
                                Its objective is to make the people realize how evil man becomes when he denies the Hereafter, or becomes heedless of it, and also to warn them that in the Hereafter not only their visible and apparent deeds but even the secrets hidden in their hearts will be subjected to scrutiny.
                            </Typography>
                            <Typography variant="body1" sx={{ mt: 3}}>
                                For this purpose, the general chaos and confusion prevailing in Arabia, with which the whole country was in turmoil, has been presented as an argument. Bloodshed, loot and plunder raged on every side. Tribes were subjecting other tribes to raids, and no one could have peaceful sleep at night from fear that some enemy tribe might raid his settlement early in the morning. Every Arab was fully conscious of this state of affairs and realized that it was wrong. Although the plundered bemoaned their miserable, helpless state and the plunderer rejoiced, when the plunderer himself was plundered, he too realized how abject the condition in which the whole nation was involved was. Referring to this very state of affairs, it has been said: Unaware of the second life after death and his accountability before God in it, man has become ungrateful to his Lord and Sustainer. He is using the powers and abilities given by God for perpetrating tyranny and pillage; blinded by the love of worldly wealth he tries to obtain it by every means, however impure and filthy, and his own state itself testifies that by abusing the powers bestowed by his Lord he is being ungrateful to Him. He would never have behaved so, had he known the time when the dead will be raised from the graves, and when the intentions and motives with which he had done all sorts of deeds in the world, will be exposed and brought out before everyone to see. At that time, the Lord and Sustainer of men shall be well informed of what one has done and what punishment or reward one deserves.                            
                            </Typography>
                            <Button variant="outlined" color="dark" startIcon={ <ArrowCircleRightRoundedIcon />} sx={{ mt: 4 }}>Go to Lecture</Button>

                        </Grid>
                    </Grid>
                    
                </Grid>
                <Grid item lg={3} sx={{ pl: 3, borderLeft: 1, minHeight: '100vh' }}>
                    <Grid container direction="column" sx={{ top: 35, position: 'sticky' }}>
                

                    <Grid item sx={{ mb: 5 }}>
                        <Paper elevation={0}
                        component="form"
                        sx={{ px: "4px", py: "4px", borderRadius: 10, display: 'flex', alignItems: 'center', width: '100%', backgroundColor: '#F5F4F3'}}>
                        <IconButton sx={{ p: '8px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 0, flex: 1,  fontSize: 12 }}

                            placeholder="Search Surah or Keyword"
                            inputProps={{ 'aria-label': 'Search surah' }}
                        />
                        </Paper>
                        </Grid>
















                        <Grid item>
                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Sections     
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="sage" disableElevation fullWidth sx={{ mb: 1 }}>
                                <Grid container>
                                    Name
                                </Grid>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="sage" disableElevation fullWidth sx={{ mb: 1 }}>
                                <Grid container>
                                    Period of Revelation
                                </Grid>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="sage" disableElevation fullWidth>
                                <Grid container>
                                    Theme and Subject Matter
                                </Grid>
                            </Button>
                        </Grid>
                        {/* <Grid item>
                            <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
                                Next Lesson     
                            </Typography>
                        </Grid>
                        <Grid item sx={{ backgroundColor: '#F5F4F3', borderRadius: '32px' }}>
                        <Button color="dark" sx={{ width: "100%", borderRadius: 'inherit'}}>
                            <Grid container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{ pl: 0, pr: 0, py: 0 }}>
                            <Grid item>
                            <Grid container>
                                <Grid item sx={{ mr: 2 }}>
                                <Grid container sx={{ backgroundColor: '#CCE0DE', height: '50px', width: '50px', borderRadius: 7 }}
                                justifyContent="center"
                                alignItems="center">
                                    <Grid item>
                                    <Typography variant="body1" sx={{ mb: 0 }}>
                                        
                                        101
                                    </Typography>
                                    </Grid>
                                </Grid>
                                </Grid>

                                <Grid item>
                                    <Typography variant="body1" sx={{ mb: 0 }}>
                                        
                                        Al-Qari’ah
                                    </Typography>
                                    
                                </Grid>
                            </Grid>
                            </Grid>

                            <Grid item>
                                <Typography variant="h5_ar">
                                   
                                    القَارعَة
                                    </Typography>
                                
                            </Grid>
                            </Grid>
                            </Button>

                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{ pt: 10, borderTop: 1, pb: 15}}
            direction="row"
            alignItems="center"
            justifyContent="space-between">
                <Link href="../" style={{ textDecoration: 'none', color: 'black' }}>
                <QuranJourneyButton/>
                </Link>

                    {/* Come back to this styling */}
                    <Typography vairant="h6" sx={{ color: '#727272', textTransform: 'uppercase', fontWeight: '700', fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif', fontSize: '0.9rem'}}>
                        © 2022 Quran Journey All Rights Reserved
                    </Typography>
                    
                </Grid>
        
        </Container>
        </>
    )
}