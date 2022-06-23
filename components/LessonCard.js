import * as React from 'react';
// import {server} from '../config'
// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';

const LessonCard = (props) => {
    return (
        <Grid item xs={12} md={4}>
            <Grid container sx={{p: 1}}>
            <Grid item sx={{ backgroundColor: '#FFFFFF', borderRadius: '32px', width: '100%' }}>
            <Grid container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ pl: 2, pr: 3, py: 3 }}>
              <Grid item>
              <Grid container>
                <Grid item sx={{ mr: 2 }}>
                  <Grid container sx={{ backgroundColor: '#CCE0DE', height: '50px', width: '50px', borderRadius: 7 }}
                  justifyContent="center"
                  alignItems="center">
                    <Grid item>
                      <Typography variant="h5" sx={{ mb: 0 }}>
                        {/* 1 */}
                        {props.id}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <Typography variant="h5" sx={{ mb: 0 }}>
                    {/* Al-Fatiha */}
                    {props.name}
                  </Typography>
                  <Typography variant="subtitle2">
                    {/* The Opener */}
                    {props.meaning}
                  </Typography>
                </Grid>
              </Grid>
              </Grid>
            
              <Grid item>
                <Grid container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-end">
                  <Grid item>
                    <Typography variant="h4_ar">
                      {/* الفَاتِحَة */}
                      {props.name_ar}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle2">
                      {/* 7 Ayahs */}
                      {props.verses} Ayahs
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
    )  
}

export default LessonCard