import * as React from 'react';
// import {server} from '../config'
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import QuranJourneyButton from './QuranJourneyButton';
import Typography from '@mui/material/Typography';
import { Container, Grid, Link } from '@mui/material';
import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';// import { ColorLensIcon } from '@mui/icons-material';
// import ColorLensIcon from '@mui/icons-material/ColorLens';


const Nav = () => {
    return (
      <Container sx={{
        py: 5
      }}>
        <Grid 
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
            <Grid item>
              <QuranJourneyButton/>
            </Grid>
            <Grid item>
                <IconButton color="dark">
                    <Brightness6Icon />
                </IconButton>  
            </Grid>
        </Grid>
      </Container>
    )
  }
  
  export default Nav