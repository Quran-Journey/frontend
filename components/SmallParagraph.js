import * as React from 'react';
import Typography from '@mui/material/Typography';

const SmallParagraph = (props) => {
    return (
        <Typography variant="body2" sx={{ mt: 1}}>
            {props.content}
        </Typography>
    )
}

export default SmallParagraph