import * as React from 'react';
// import Chip from '@mui/material/Chip';
// import { Button, Container, Grid, Paper, InputBase, IconButton } from '@mui/material'
import Grid from '@mui/material/Grid';
import HighlightedText from './HighlightedText';
import StandardText from './StandardText';

const BodyText = (props) => {
    return (
        <Grid container>
            {props.highlighted ? <HighlightedText heading={props.heading} content={props.content}/> : <StandardText heading={props.heading} content={props.content}/>}
        </Grid>
    )
}

export default BodyText