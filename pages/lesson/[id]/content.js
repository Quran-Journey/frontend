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
import VerseCollapse from '../../../components/VerseCollapse';
import { useRouter } from 'next/router';

import { lessons } from '../../../mock_data/data';
import { ayah_data } from '../../../mock_data/lessonData';

// console.log(lessons[0])
// console.log(ayah_data[0])



const surah_details = { name: "Surah Al 'adiyat", name_ar: 'سُوۡرَةُ العَادیَات', verses: '11' }
const verse_data = [
    {
        verse: 1,
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
    {
        verse: 1,
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

// split string from api
// Recoil -> For state management
// Redux 
export default function lessonMain() {
    const router = useRouter()

    const [open, setOpen] = React.useState(false);
    // const [open2, setOpen2] = React.useState(false);


    const handleClick = () => {
        setOpen(!open);
    };

    // const handleClick2 = () => {
    //     setOpen2(!open2);
    // };

    const curr_lesson = lessons[0]
    const curr_verse_data = ayah_data[0]

    return (
        <>
            <Nav />

            <Container>
                {/* Vimeo - place holder sdk */}
                <Grid container direction='row'>
                    <Grid item lg={9} sx={{ pr: 9, pb: 10 }}>
                        <Grid container direction='column'>

                            <Grid item>
                                <DetailedSurahTitle name={curr_lesson.name} name_ar={curr_lesson.name_ar} verses={curr_lesson.verses} num={curr_lesson.id} />
                            </Grid>

                            {ayah_data.map((curr_verse_data) =>
                                <VerseCollapse name_ar={curr_lesson.name_ar} surah_num={curr_lesson.id} verse_num={curr_verse_data.verse_num} translation={curr_verse_data.translation} ayah={curr_verse_data.ayah}
                            word={curr_verse_data.root_words[0].word} root={curr_verse_data.root_words[0].root} blurb={curr_verse_data.root_words[0].blurb}
                            tafsir={curr_verse_data.tafsir[0].text} reflections={curr_verse_data.reflections[0].text}/>
                            )}

                            {/* <VerseCollapse name_ar={curr_lesson.name_ar} surah_num={curr_lesson.id} verse_num={curr_verse_data.verse_num} translation={curr_verse_data.translation} ayah={curr_verse_data.ayah}
                            word={curr_verse_data.root_words[0].word} root={curr_verse_data.root_words[0].root} blurb={curr_verse_data.root_words[0].blurb}
                            tafsir={curr_verse_data.tafsir[0].text} reflections={curr_verse_data.reflections[0].text}/> */}

                            <Grid item sx={{ mt: 5 }}>
                                <Button variant="outlined" color="dark" startIcon={<ArrowCircleLeftRoundedIcon />}
                                    onClick={() => router.back()}>Back</Button>
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