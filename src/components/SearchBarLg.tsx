import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBarLg = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item sx={{ mt: 3 }} md={10} xs={12}>
        <Paper
          elevation={0}
          component="form"
          sx={{
            px: '4px',
            py: '2px',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton sx={{ p: '20px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="What surah would you like to investigate?"
            inputProps={{
              'aria-label': 'What surah would you like to investigate?',
            }}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchBarLg;
