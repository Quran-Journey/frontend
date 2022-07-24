import * as React from 'react';
import Chip from '@mui/material/Chip';
import { Button, Container, Grid, Paper, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import SectionButton from './SectionButton';
import SearchBar from './SearchBar';

const SideBar = (props) => {
    return (
        <Grid item lg={3} sx={{ pl: 3, borderLeft: 1 }}>
            <Grid container direction="column" sx={{ top: 35, position: 'sticky' }}>
                <Grid item>
                    <SearchBar />
                </Grid>
                <Grid item>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        {props.type}     
                    </Typography>
                </Grid>
                <Grid item>
                    {props.sections ?
                        <>
                        {props.sections.map((sections) => 
                            <SectionButton section={sections.heading} />
                            )} 
                        </> 
                        : <></>
                    }
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SideBar