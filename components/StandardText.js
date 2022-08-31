import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RegularParagraph from './RegularParagraph'

const StandardText = (props) => {
    const id = props.heading.replace(/\s+/g, '-')

    return (
        <Grid container>
            <Grid item sx={{ mt: 8 }} id={id}>
                <Typography variant='h4' sx={{ mb: 1 }}>
                    {props.heading}
                </Typography>

                {props.content.map((content) =>
                <RegularParagraph content={content}/>
                )}

            </Grid>
        </Grid>
    )
}

export default StandardText