import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
    return (
        <Grid item sx={{ mb: 5 }}>
            <Paper elevation={0}
            component="form"
            sx={{ px: "4px", py: "4px", borderRadius: 10, display: 'flex', alignItems: 'center', width: '100%', backgroundColor: '#F5F4F3'}}>
                <IconButton sx={{ p: '8px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 0, flex: 1,  fontSize: 12 }}

                    placeholder="Search Surah or Keyword"
                    inputProps={{ 'aria-label': 'Search surah' }}
                />
            </Paper>
        </Grid>
    )
}

export default SearchBar

