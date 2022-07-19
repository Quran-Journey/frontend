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
import { Button, Container, Grid, Paper, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// import Nav from '../../components/Nav';
import Nav from '../components/Nav'
// import LessonCard from '../components/LessonCard'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';// import { ColorLensIcon } from '@mui/icons-material';
import Footer from '../components/Footer';
// import SideBar from '../components/SideBarTest';
import SideBar from '../components/SideBar'
import SectionButton from '../components/SectionButton';
import SurahIntroTitle from '../components/SurahIntroTitle';
import BodyText from '../components/BodyText';
// import { Link } from "react-scroll";

// This will change later
// const sections = [{section: 'Name'}, {section: 'Period of Revelation'}, {section: 'Theme and Subject Matter'}]
const surah_details = {name: "Surah Al 'adiyat", name_ar: 'سُوۡرَةُ العَادیَات', verses: '11'}
const surah_info = [
    {heading: 'Name', highlighted: true, content: ["The Surah has been titled so after the word al 'adiyat with which it opens."]},
    {heading: 'Period of Revelation', highlighted: true,
        content: ["Makki: Abdullah bin Masud, Jabir, Hasan Basri, Ikrimah, and Ata", 
        "Madani: Anas bin Malik, and Qatadah",
        "Ibn Abbas two views have been reported, first that it is a Makki Surah, and second that it is Madani.",
        "But the subject matter of the Surah and its style clearly indicate that it is not only Makki but was revealed in the earliest stage in Makkah."]},
    {heading: 'Theme and Subject Matter', highlighted: false,
        content: ["Its objective is to make the people realize how evil man becomes when he denies the Hereafter, or becomes heedless of it, and also to warn them that in the Hereafter not only their visible and apparent deeds but even the secrets hidden in their hearts will be subjected to scrutiny.",
        "For this purpose, the general chaos and confusion prevailing in Arabia, with which the whole country was in turmoil, has been presented as an argument. Bloodshed, loot and plunder raged on every side. Tribes were subjecting other tribes to raids, and no one could have peaceful sleep at night from fear that some enemy tribe might raid his settlement early in the morning. Every Arab was fully conscious of this state of affairs and realized that it was wrong. Although the plundered bemoaned their miserable, helpless state and the plunderer rejoiced, when the plunderer himself was plundered, he too realized how abject the condition in which the whole nation was involved was. Referring to this very state of affairs, it has been said: Unaware of the second life after death and his accountability before God in it, man has become ungrateful to his Lord and Sustainer. He is using the powers and abilities given by God for perpetrating tyranny and pillage; blinded by the love of worldly wealth he tries to obtain it by every means, however impure and filthy, and his own state itself testifies that by abusing the powers bestowed by his Lord he is being ungrateful to Him. He would never have behaved so, had he known the time when the dead will be raised from the graves, and when the intentions and motives with which he had done all sorts of deeds in the world, will be exposed and brought out before everyone to see. At that time, the Lord and Sustainer of men shall be well informed of what one has done and what punishment or reward one deserves."]}
]

const sideBarType = {type: 'Sections'}

export default function lessonIntro() {
    return (
        <>
        <Nav />
        <Container>
            <Grid container direction="row">
                <Grid item lg={9} sx={{ pr: 9, pb: 10 }}>
                    <SurahIntroTitle name={surah_details.name} name_ar={surah_details.name_ar} verses={surah_details.verses}/>
                    {surah_info.map((surah) =>
                        <BodyText heading={surah.heading} highlighted={surah.highlighted} content={surah.content}/>
                    )}
                    
                    <Button variant="outlined" color="dark" startIcon={ <ArrowCircleRightRoundedIcon />}>Go to Lecture</Button>
                </Grid>
                <SideBar type={sideBarType.type} sections={surah_info} />
            </Grid>
        </Container>
        <Footer />
        </>
    )
}