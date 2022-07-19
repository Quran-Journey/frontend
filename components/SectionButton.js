import * as React from 'react';
import { Button, Container, Grid, IconButton } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Link } from "react-scroll";

const SectionButton = (props) => {
    const id = props.section.replace(/\s+/g, '-')
    console.log(id)
    return (
            <Link activeClass="active"
                to={id}
                spy={true}
                smooth={true}
                offset={-50}
                duration={400}>
                <Button variant="contained" color="sage" disableElevation fullWidth sx={{ mb: 1 }}>
                    <Grid container>
                        {props.section}
                    </Grid>
                </Button>
            </Link>
    )
}

export default SectionButton