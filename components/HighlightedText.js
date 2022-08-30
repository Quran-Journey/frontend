import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import SmallParagraph from './SmallParagraph';

const HighlightedText = (props) => {
    const id = props.heading.replace(/\s+/g, '-')

    return (
        <Grid container sx={{ mt: 1.5, backgroundColor: '#EEF1EC', py: 3, px: 3.5, borderRadius: '22px', width: '100%' }}>
            <Grid item id={id}>
                <Typography variant='h5' sx={{ mb: 1 }}>
                    {props.heading}
                </Typography>
                
                {props.content.map((content) =>
                <SmallParagraph content={content}/>
                )}

            </Grid>
        </Grid>
    )
}

export default HighlightedText