import { createTheme } from '@mui/material/styles';


const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1fc9b9',
      contrastText: '#000000',
      light: '#cce0de',
      dark: '#8dbab5',
    },
    secondary: {
      main: '#bee520',
      light: '#d5e86a',
      dark: '#aace12',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      fontSize: '5rem',
    },
    h2: {
      fontWeight: 600,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    h4: {
      fontWeight: 600,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    h5: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    h6: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    subtitle1: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      lineHeight: 1.7,
      fontSize: '1.1rem',
    },
    body2: {
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontWeight: 600,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      textTransform: 'none',
    },
  },
  defaultProps: {
    MuiChip: {
      fontWeight: 600,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      textTransform: 'uppercase',
    }
  }
})

export default lightTheme;