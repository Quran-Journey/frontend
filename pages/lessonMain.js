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
    surah_num: 100,
    ayah: 'وَٱلْعَـٰدِيَـٰتِ ضَبْحًۭا',
    translation: '’ By the galloping, panting horses,',
    root_words: [{
        word: 'ٱلْعَـٰدِيَـٰتِ',
        root: 'عدو',
        blurb: 'The وَ in the word وَالْعَادِيَاتِ is for taking an oath. Thus we can look for the response to the oath in ayah 6 /n The word وَالْعَادِيَاتِ is from the root عدو and is associated with the meanings of: to run, speed, gallop, dash, race; to go pass the limits of something, to transgress rights,to engage in aggressive or hostile action; to harbor mutual enmity and hatred'
        },
        {
            word: 'ضَبْحًا',
            root: 'ضبح',
            blurb: 'The word ضَبْحًا is from the root ضبح and is associated with the meanings of: to snort or pant (horse), breathed pantingly, or hard, with a sound from the chest, breathing that is heard when running',
        }],
    tafsir: [{
        mufasir: 'Ibn Abbas RA',
        text: 'Horses or Camels and this is during battle. From other reports: It is when horses/riders set out in the way of Allah SWT and then take refuge at night and make food by making a fire. Ata narrates that Ibn Abbas described the noise as أَحْ أَحْ.'
    }],
    reflections: [{
        sub_heading: '', 
        text: '*Whinny or Neigh* - A whinny or a neigh often denotes a greeting or an affirmation of location. *Nicker* - The nicker is a low pitched guttural sound. I equate it with happiness. *Snort* - The horse usually holds his head high while exhaling through the nose with his mouth shut. *Squeal* - The horse usually squeals with its mouth closed. A squeal varies in length and loudness depending on the intensity of the situation. Often you hear a mare squeal when she did not like something that is happening or is being courted by a male. *Blow* - The blow is a simple exhale through the nose but the horse has his mouth shut. The blow is much like the snort but without any vibration or fluttering noises. Curiosity, well being, happy anticipation of a good romp and ride, or the greeting of another horse will bring on a blow. *Grunt or Groan* - The grunt or groan can be considered a sign of pain as well as a sign of contentment. *Roar or Trumpet* - Anger, confusion, fear, rage and pain will bring on a roar or trumpet. It is really a disturbing sound. It is a sound of a horse in some kind of distress. *Roar or Trumpet* - Anger, confusion, fear, rage and pain will bring on a roar or trumpet. It is really a disturbing sound. It is a sound of a horse in some kind of distress. *Sigh* - Drawing in a deep breath, then letting it out slowly and audibly through the mouth or nostrils is a horse sigh. A sigh can mean relief from something that is bothering the horse.'
    }]
    },
    {verse: 1, 
        surah_num: 100,
        ayah: 'وَٱلْعَـٰدِيَـٰتِ ضَبْحًۭا',
        translation: '’ By the galloping, panting horses,',
        root_words: [{
            word: 'ٱلْعَـٰدِيَـٰتِ',
            root: 'عدو',
            blurb: 'The وَ in the word وَالْعَادِيَاتِ is for taking an oath. Thus we can look for the response to the oath in ayah 6 /n The word وَالْعَادِيَاتِ is from the root عدو and is associated with the meanings of: to run, speed, gallop, dash, race; to go pass the limits of something, to transgress rights,to engage in aggressive or hostile action; to harbor mutual enmity and hatred'
            },
            {
                word: 'ضَبْحًا',
                root: 'ضبح',
                blurb: 'The word ضَبْحًا is from the root ضبح and is associated with the meanings of: to snort or pant (horse), breathed pantingly, or hard, with a sound from the chest, breathing that is heard when running',
            }],
        tafsir: [{
            mufasir: 'Ibn Abbas RA',
            text: 'Horses or Camels and this is during battle. From other reports: It is when horses/riders set out in the way of Allah SWT and then take refuge at night and make food by making a fire. Ata narrates that Ibn Abbas described the noise as أَحْ أَحْ.'
        }],
        reflections: [{
            sub_heading: '', 
            text: '*Whinny or Neigh* - A whinny or a neigh often denotes a greeting or an affirmation of location. *Nicker* - The nicker is a low pitched guttural sound. I equate it with happiness. *Snort* - The horse usually holds his head high while exhaling through the nose with his mouth shut. *Squeal* - The horse usually squeals with its mouth closed. A squeal varies in length and loudness depending on the intensity of the situation. Often you hear a mare squeal when she did not like something that is happening or is being courted by a male. *Blow* - The blow is a simple exhale through the nose but the horse has his mouth shut. The blow is much like the snort but without any vibration or fluttering noises. Curiosity, well being, happy anticipation of a good romp and ride, or the greeting of another horse will bring on a blow. *Grunt or Groan* - The grunt or groan can be considered a sign of pain as well as a sign of contentment. *Roar or Trumpet* - Anger, confusion, fear, rage and pain will bring on a roar or trumpet. It is really a disturbing sound. It is a sound of a horse in some kind of distress. *Roar or Trumpet* - Anger, confusion, fear, rage and pain will bring on a roar or trumpet. It is really a disturbing sound. It is a sound of a horse in some kind of distress. *Sigh* - Drawing in a deep breath, then letting it out slowly and audibly through the mouth or nostrils is a horse sigh. A sigh can mean relief from something that is bothering the horse.'
        }]
        },
]

console.log(verse_data)

export default function lessonMain () {
    return (
        <>
        <Nav />

        <Container>
            <Grid container direction='row'>
                <Grid item lg={9} sx={{ pr: 9, pb: 10 }}>
                    <Grid container direction='column'>
                        <Grid item sx={{ backgroundColor: '#EEF1EC', py: 3, px: 4, borderRadius: '32px', width: '100%' }}>
                            <Grid container direction='column'>
                                <Grid item sx={{ mb: 1 }}>
                                    <Grid container direction='row' justifyContent="space-between">
                                        <Grid item>
                                            <Typography variant='subtitle1' sx={{ color: '#727272' }}>
                                                {verse_data[0].surah_num}:{verse_data[0].verse}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h5_ar' sx={{ color: '#727272' }}>
                                                {surah_details.name_ar}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item sx={{pb: 5, borderBottom: 1}}>
                                    <Grid container direction='row' justifyContent="space-between">
                                        <Grid item>
                                            <Typography variant='body2'>
                                                {verse_data[0].translation}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='h4_ar'>
                                                {verse_data[0].ayah} ({verse_data[0].verse})
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item sx={{ mt: 5, mb: 4 }}>
                                    <Typography variant='h5'>
                                        Linguistics/Rhetorical Benefits
                                    </Typography>
                                </Grid>

                                <Grid item sx={{ mb: 3 }}>
                                    <Grid container direction='row'>
                                        <Grid item lg={4} sx={{ pr: 2 }}>
                                            <Grid container direction="column"
                                            justifyContent="space-between"
                                            alignItems="center" sx={{ backgroundColor: '#ffffff', borderRadius: '32px', height: '100%', py: 2}}>
                                                <Grid item>
                                                    {/* <Chip color="secondary" label="Word" size="small"/> */}
                                                </Grid>
                                                <Grid item>
                                                    <Grid container direction='column'
                                                    justifyContent="center"
                                                    alignItems="center">
                                                        <Grid item>
                                                            <Typography variant='h3_ar'>
                                                                {verse_data[0].root_words[0].word}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container direction='row' justifyContent="center" alignItems="center">
                                                                <Grid item>
                                                                    <Typography variant='subtitle2' sx={{pt: 1, pr: 1}}>
                                                                        Root word:
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography variant='h5_ar'>
                                                                        {verse_data[0].root_words[0].root}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    {/* <Chip /> */}
                                                    
                                                </Grid>

                                            </Grid>

                                        </Grid>
                                        <Grid item lg={8} sx={{ pl: 3 }}>
                                            <Typography variant='body2'>
                                                {verse_data[0].root_words[0].blurb}
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>

                                <Grid item sx={{pb: 5, borderBottom: 1}}>
                                    <Grid container direction='row'>
                                        <Grid item lg={4} sx={{ pr: 2 }}>
                                            <Grid container direction="column"
                                            justifyContent="space-between"
                                            alignItems="center" sx={{ backgroundColor: '#ffffff', borderRadius: '32px', height: '100%', py: 2}}>
                                                <Grid item>
                                                    {/* <Chip color="secondary" label="Word" size="small"/> */}
                                                </Grid>
                                                <Grid item>
                                                    <Grid container direction='column'
                                                    justifyContent="center"
                                                    alignItems="center">
                                                        <Grid item>
                                                            <Typography variant='h3_ar'>
                                                                {verse_data[0].root_words[1].word}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container direction='row' justifyContent="center" alignItems="center">
                                                                <Grid item>
                                                                    <Typography variant='subtitle2' sx={{pt: 1, pr: 1}}>
                                                                        Root word:
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item>
                                                                    <Typography variant='h5_ar'>
                                                                        {verse_data[0].root_words[1].root}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid item>
                                                    {/* <Chip /> */}
                                                    
                                                </Grid>

                                            </Grid>

                                        </Grid>
                                        <Grid item lg={8} sx={{ pl: 3 }}>
                                            <Typography variant='body2'>
                                                {verse_data[0].root_words[1].blurb}
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>

                    

                            </Grid>
                        </Grid>

                        <Grid item sx={{mt: 5}}>
                            <Button variant="outlined" color="dark" startIcon={ <ArrowCircleLeftRoundedIcon />}>Back</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <SideBar />
            </Grid>

        </Container>

        <Footer />
        </>
        
    )
}