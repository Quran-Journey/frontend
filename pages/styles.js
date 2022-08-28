import {server} from '../config'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { lessons } from '../mock_data/data'

import * as React from 'react';
import Chip from '@mui/material/Chip';
// import Stack from '@mui/material/Stack';
import { Button, Container, Grid, Paper, InputBase, Divider, IconButton, ListItemSecondaryAction } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search';
// import PageviewIcon from '@mui/icons-material/Pageview';
import Typography from '@mui/material/Typography';
import Nav from '../components/Nav'
// import TextField from '@mui/material/TextField';
// import FindInPageIcon from '@mui/icons-material/FindInPage';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
// import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
// import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
// import CreateIcon from '@mui/icons-material/Create';
// import SaveAltIcon from '@mui/icons-material/SaveAlt';
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import Brightness6RoundedIcon from '@mui/icons-material/Brightness6Rounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import AyahButton from '../components/AyahButton'
// import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Style() {
  return (
    <div>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Container>
        <Grid container
          direction="column"
          justifyContent="flex-start"
        //   alignItems="center"
          sx={{ mt: 5 }}>

          <Grid item sx={{ borderBottom: 1, pb: 2, borderColor: '#B9B9B9' }}>
            <Typography variant="h1">
              Styles        
            </Typography>
            
          </Grid>

          <Grid item sx={{ mt: 8 }}>
            <Typography variant="h1">
              H1 heading        
            </Typography>
            <Typography variant="h2">
              H2 heading        
            </Typography>
            <Typography variant="h3">
              H3 heading        
            </Typography>
            <Typography variant="h4">
              H4 heading        
            </Typography>
            <Typography variant="subtitle1">
              Subtitle1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
            </Typography>
            <Typography variant="subtitle2">
              Subtitle2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
            </Typography>
            <Typography variant="body1">
              Body1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.        
            </Typography>
            <Typography variant="body2" sx={{ mb: 5 }}>
              Body2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.       
            </Typography>
            <Typography variant="h1_ar">
            سُوۡرَةُ H1 Arabic        
            </Typography>
            <br/>
            <Typography variant="h2_ar">
            سُوۡرَةُ H2 Arabic          
            </Typography>
            <br/>
            <Typography variant="h3_ar">
            سُوۡرَةُ H3 Arabic        
            </Typography>
            <br/>
            <Typography variant="h4_ar">
            سُوۡرَةُ H4 Arabic        
            </Typography>

          </Grid>

          <Grid item sx={{ mt: 5 }}>
            <Typography variant="h3">
              Chips        
            </Typography>
          </Grid>

          <Grid item sx={{ mt: 2 }}>
            <Chip color="secondary" label="Lessons" sx={{ mr: 2 }} />
            <Chip color="secondary" label="Word" sx={{ mr: 2 }} />
            <Chip color="secondary" label="Add New Lesson" sx={{ mr: 2 }} />
          </Grid>

          <Grid item sx={{ mt: 5 }}>
            <Typography variant="h3">
              Buttons        
            </Typography>
          </Grid>

          <Grid item sx={{ mt: 2 }}>
            <Button variant="outlined" color="dark" startIcon={ <ArrowCircleRightRoundedIcon />}>Go to Lecture</Button>
            <Button variant="outlined" color="dark" startIcon={ <ArrowCircleLeftRoundedIcon />} sx={{ ml: 3 }}>Back to Intro</Button>
            <Button variant="outlined" color="dark" endIcon={ <ArrowCircleDownRoundedIcon />} sx={{ ml: 3 }}>Dropdown</Button>
            <Button variant="outlined" color="dark" sx={{ ml: 3 }}>Edit</Button>
            <Button variant="outlined" color="dark" startIcon={ <LibraryAddRoundedIcon />} sx={{ ml: 3 }}>Save</Button>
          </Grid>

          <Grid item sx={{ mt: 4 }}>
            <Grid container sx={{ mb: 1 }}>
                <Grid item md={3}>
                    <Button variant="contained" color="sage" disableElevation fullWidth>
                        <Grid container>
                            Section Name
                        </Grid>
                    </Button>
                </Grid>
                
            </Grid>
            <Grid container>
                <Grid item md={3}>
                    <Button variant="contained" color="sage" disableElevation fullWidth>
                        <Grid container>
                            Section Name
                        </Grid>
                    </Button>
                </Grid>
                
            </Grid>
          </Grid>

          <AyahButton/>

          <Grid item sx={{ mt: 0 }}>
            <Typography variant="h3">
              Icon Button        
            </Typography>
            <Typography variant="subtitle1">
              Make sure to use the <a href='https://mui.com/material-ui/material-icons/?theme=Rounded' target="_blank">rounded MUI icons</a>
            </Typography>
          </Grid>

          <Grid item sx={{ mt: 2 }}>
            <IconButton color='dark'>
              <VisibilityRoundedIcon />
            </IconButton>
            <IconButton color='dark'>
              <VisibilityOffRoundedIcon />
            </IconButton>
            <IconButton color='dark'>
              <AddBoxRoundedIcon />
            </IconButton>
            <IconButton color='dark'>
              <Brightness6RoundedIcon />
            </IconButton>
            <IconButton color='dark'>
              <Brightness7RoundedIcon />
            </IconButton>

          </Grid>
          
          <Grid item sx={{ mt: 5 }}>
            <Typography variant="h3">
              Highlighted Text        
            </Typography>
          </Grid>

          <Grid item sx={{ mt: 2, backgroundColor: '#EEF1EC', p: 5, borderRadius: '32px' }}>
            <Typography variant="h4" sx={{ mb: 1 }}>
                Title of Box
            </Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </Typography>
          </Grid>
          <Grid item sx={{ mt: 5, backgroundColor: '#EEF1EC', px: 6, py: 5, borderRadius: '32px', mb: 10, textAlign: "center" }}>
            <Typography variant="h4_ar">
            عن النبي صلى هللا عليه وسلم - من قرأ سورة والعاديات أعطى من األجر عشر حسنات بعدد من بات بالمزدلفة وشهد جمعاً            
            </Typography>
          </Grid>

          {/* <Grid item sx={{ mt: 5 }}>
            <Typography variant="h4">
              Accordion        
            </Typography>
          </Grid>

          <Grid item sx={{ mt: 2, mb: 10 }}>
          <Accordion sx={{ mb: 5 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Ayah 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
      
          </Grid> */}

        </Grid>

      </Container>


      
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/lessons`)
//   const lessons = await res.json()

//   return {
//     props: {
//       lessons,
//     }
//   }
// }