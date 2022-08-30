import * as React from 'react';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer';
import SideBar from '../../../components/SideBar'
import DetailedSurahTitle from '../../../components/DetailedSurahTitle'


const surah_details = {name: "Surah Al 'adiyat", name_ar: 'سُوۡرَةُ العَادیَات', verses: '11'}
const verse_data = [
    {verse: 1, 
    surah_num: 100,
    ayah: 'وَٱلْعَـٰدِيَـٰتِ ضَبْحًۭا',
    translation: '’ By the galloping, panting horses,',
    root_words: [{
        word: 'ٱلْعَـٰدِيَـٰتِ',
        root: 'عدو',
        blurb: 'The وَ in the word وَالْعَادِيَاتِ is for taking an oath. Thus we can look for the response to the oath in ayah 6 \r\n The word وَالْعَادِيَاتِ is from the root عدو and is associated with the meanings of: to run, speed, gallop, dash, race; to go pass the limits of something, to transgress rights,to engage in aggressive or hostile action; to harbor mutual enmity and hatred'
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
            sub_heading: 'Horse Vocalizations', 
            text: '*Whinny or Neigh* - A whinny or a neigh often denotes a greeting or an affirmation of location. *Nicker* - The nicker is a low pitched guttural sound. I equate it with happiness. *Snort* - The horse usually holds his head high while exhaling through the nose with his mouth shut. *Squeal* - The horse usually squeals with its mouth closed. A squeal varies in length and loudness depending on the intensity of the situation. Often you hear a mare squeal when she did not like something that is happening or is being courted by a male. *Blow* - The blow is a simple exhale through the nose but the horse has his mouth shut. The blow is much like the snort but without any vibration or fluttering noises. Curiosity, well being, happy anticipation of a good romp and ride, or the greeting of another horse will bring on a blow. *Grunt or Groan* - The grunt or groan can be considered a sign of pain as well as a sign of contentment. *Roar or Trumpet* - Anger, confusion, fear, rage and pain will bring on a roar or trumpet. It is really a disturbing sound. It is a sound of a horse in some kind of distress. *Roar or Trumpet* - Anger, confusion, fear, rage and pain will bring on a roar or trumpet. It is really a disturbing sound. It is a sound of a horse in some kind of distress. *Sigh* - Drawing in a deep breath, then letting it out slowly and audibly through the mouth or nostrils is a horse sigh. A sigh can mean relief from something that is bothering the horse.'
        }]
        },
]

console.log(verse_data)

// split string from api
// Recoil -> For state management
// Redux 
export default function lessonMain () {

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);


    const handleClick = () => {
        setOpen(!open);
    };

    const handleClick2 = () => {
        setOpen2(!open2);
    };

    return (
        <>
        <Nav />

       

        <Container>
            {/* Vimeo - place holder sdk */}

            <Grid container direction='row'>
                <Grid item lg={9} sx={{ pr: 9, pb: 10 }}>

                    <Grid container direction='column'>
                        {/* <Grid item sx={{ mb: 2 }}>
                            <iframe src="https://player.vimeo.com/video/695692957?h=0c7714e3d7&title=0&byline=0&portrait=0" class="video" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </Grid> */}
                        <Grid item>
                            <DetailedSurahTitle name={surah_details.name} name_ar={surah_details.name_ar} verses={surah_details.verses}/>
                        </Grid>
                    <ListItemButton onClick={handleClick} sx={{ borderRadius: '32px', width: '100%', m: 0, p: 0,  mb: 2 }}>

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
                                <Grid item sx={{pb: 2 }}>
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

                                
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                
                                <Grid item sx={{borderBottom: 1, mt: 3}}>

                                </Grid>

                                <Grid item sx={{ mt: 5, mb: 4 }}>
                                    <Typography variant='h5'>
                                        Linguistics/Rhetorical Benefits
                                    </Typography>
                                </Grid>

                                <Grid item sx={{ mb: 3 }}>
                                    <Grid container direction='row'>
                                        <Grid item xs={4} sx={{ pr: 2 }}>
                                            <Grid container direction="column"
                                            justifyContent="space-between"
                                            alignItems="center" sx={{ backgroundColor: '#ffffff', width: '100%', aspectRatio: '1', borderRadius: '32px', py: 2}}>
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
                                        <Grid item xs={8} sx={{ pl: 2, pt: 1 }}>
                                            <Typography variant='body2'>
                                                {verse_data[0].root_words[0].blurb}
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>

                                <Grid item sx={{pb: 5, borderBottom: 1}}>
                                    <Grid container direction='row'>
                                        <Grid item xs={4} sx={{ pr: 2 }}>
                                            <Grid container direction="column"
                                            justifyContent="space-between"
                                            alignItems="center" sx={{ backgroundColor: '#ffffff', borderRadius: '32px',width: '100%', aspectRatio: '1', py: 2}}>
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
                                        <Grid item xs={8} sx={{ pl: 2, pt: 1 }}>
                                            <Typography variant='body2'>
                                                {verse_data[0].root_words[1].blurb}
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>

                    
                                <Grid item sx={{ mt: 5, mb: 2 }}>
                                    <Grid container direction='row'
                                    alignItems="center">
                                        <Grid item sx={{ mr: 3 }}>
                                            <Typography variant='h5'>
                                                Tafasir
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="outlined" color="dark" endIcon={ <ArrowDropDownCircleRoundedIcon />}> {verse_data[0].tafsir[0].mufasir} </Button>

                                        </Grid>
                                    </Grid>
                                    
                                </Grid>

                                <Grid item sx={{pb: 5, borderBottom: 1}}>
                                    <Typography variant='body2'>
                                        {verse_data[0].tafsir[0].text}
                                    </Typography>
                                </Grid>

                                <Grid item sx={{ mt: 5, mb: 2 }}>
                                    <Typography variant='h5'>
                                        Reflections
                                    </Typography>
                                </Grid>

                                <Grid item sx={{ mb: 6 }}>
                                    <Typography variant='body2'>
                                        {verse_data[0].reflections[0].text}
                                    </Typography>
                                </Grid>
                            

                            </Collapse>
                            {/* </List> */}
                            </Grid>


                        </Grid>
                        </ListItemButton>

                        <ListItemButton onClick={handleClick2} sx={{ borderRadius: '32px', width: '100%', m: 0, p: 0 }}>

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
                                <Grid item sx={{pb: 2 }}>
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

                                
                            <Collapse in={open2} timeout="auto" unmountOnExit>
                                
                                <Grid item sx={{borderBottom: 1, mt: 3}}>

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
                                            alignItems="center" sx={{ backgroundColor: '#ffffff', borderRadius: '32px', width: '100%', aspectRatio: '1', py: 2}}>
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
                                        <Grid item sm={8} sx={{ pl: 2, pt: 1 }}>
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
                                            alignItems="center" sx={{ backgroundColor: '#ffffff', borderRadius: '32px', width: '100%', aspectRatio: '1', py: 2}}>
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
                                        <Grid item lg={8} sx={{ pl: 2, pt: 1 }}>
                                            <Typography variant='body2'>
                                                {verse_data[0].root_words[1].blurb}
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </Grid>

                    
                                <Grid item sx={{ mt: 5, mb: 2 }}>
                                    <Grid container direction='row'
                                    alignItems="center">
                                        <Grid item sx={{ mr: 3 }}>
                                            <Typography variant='h5'>
                                                Tafasir
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="outlined" color="dark" endIcon={ <ArrowDropDownCircleRoundedIcon />}> {verse_data[0].tafsir[0].mufasir} </Button>

                                        </Grid>
                                    </Grid>
                                    
                                </Grid>

                                <Grid item sx={{pb: 5, borderBottom: 1}}>
                                    <Typography variant='body2'>
                                        {verse_data[0].tafsir[0].text}
                                    </Typography>
                                </Grid>

                                <Grid item sx={{ mt: 5, mb: 2 }}>
                                    <Typography variant='h5'>
                                        Reflections
                                    </Typography>
                                </Grid>

                                <Grid item sx={{ mb: 6 }}>
                                    <Typography variant='body2'>
                                        {verse_data[0].reflections[0].text}
                                    </Typography>
                                </Grid>
                            

                            </Collapse>
                            {/* </List> */}
                            </Grid>


                        </Grid>
                        </ListItemButton>


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