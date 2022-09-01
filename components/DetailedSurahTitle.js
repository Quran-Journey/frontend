import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const DetailedSurahTitle = (props) => {
    return (
        <Grid container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start" sx={{ mb: 4, px: 1 }}>
            <Grid item sx={{ width: '100%' }}>
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>

                        <Grid container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="flex-start">
                            <Grid item>
                                <Typography variant="h5" sx={{ mb: 0 }}>
                                    Surah {props.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle2">
                                    Surah {props.num}
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
                                    سُوۡرَةُ {props.name_ar}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle2">
                                    {props.verses} Ayahs
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DetailedSurahTitle;