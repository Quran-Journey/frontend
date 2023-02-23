import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1fc9b9',
      light: '#cce0de',
      dark: '#8dbab5',
      contrastText: '#000000',
    },
    secondary: {
      main: '#bee520',
      light: '#d5e86a',
      dark: '#aace12',
    },
    dark: {
      main: '#000000',
      light: '#d5e86a',
      dark: '#aace12',
      contrastText: '#FFFFFF',
    },
    sage: {
      main: '#CCECE9',
      light: '#5de3de',
      dark: '#3fe0da',
    },
    lavendar: {
      main: '#DBBEFF',
      light: '#EBF0FF',
      dark: '#B8C9FF',
      contrastText: '#000000',
    },
    periwinkle: {
      main: '#D8E1FE',
      light: '#EBF0FF',
      dark: '#B8C9FF',
      contrastText: '#000000',
    },
    babyBlue: {
      main: '#D9EEFE',
      light: '#EDF6FC',
      dark: '#B8E0FF',
      contrastText: '#000000',
    },
    mint: {
      main: '#E0EBD3',
      light: '#F2F9E9',
      dark: '#BEE294',
      contrastText: '#000000',
    },
    black: {
      main: '#000000',
      contrastText: '#FFFFFF',
    }
  },
  typography: {
    h1: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      fontSize: '5rem',
      lineHeight: 1.2,
    },
    h1_ar: {
      fontFamily: '"IBM Plex Sans Arabic", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '3rem',
      lineHeight: 1.5,
    },
    h2: {
      fontWeight: 600,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      lineHeight: 1.5,
    },
    h2_ar: {
      fontFamily: '"IBM Plex Sans Arabic", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '2.5rem',
      lineHeight: 1.5,
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      lineHeight: 1.5,
    },
    h3_ar: {
      fontFamily: '"IBM Plex Sans Arabic", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '2rem',
      lineHeight: 1.5,
    },
    h4: {
      fontWeight: 600,
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      lineHeight: 1.5,
    },
    h4_ar: {
      fontFamily: '"IBM Plex Sans Arabic", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    h5_ar: {
      fontFamily: '"IBM Plex Sans Arabic", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.95rem',
    },
    h6: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h6_ar: {
      fontFamily: '"IBM Plex Sans Arabic", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '0.75rem',
    },
    quran_text: {
      fontFamily: "'Lateef', cursive",
      fontWeight: 500,
      fontSize: '0.95rem',
    },
    subtitle1: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      lineHeight: 2,
      fontSize: '1.1rem',
    },
    body2: {
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      lineHeight: 1.7,
      fontSize: '1rem',
    },
    // button: {
    //   fontWeight: 700,
    //   fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    //   textTransform: 'none',
    //   letterSpacing: '-0.01em',
    // },
    // copyright: {
    //   fontWeight: 700,
    //   fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    //   letterSpacing: '-0.01em',
    //   fontSize: '0.9rem',
    // }
  },
  components: {
    // Name of the component
    // MuiChip: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       // Some CSS
    //       textTransform: 'uppercase',
    //       fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    //       fontWeight: 700,
    //       paddingLeft: '1.2em',
    //       paddingRight: '1.2em',
    //       paddingTop: '1.45em',
    //       paddingBottom: '1.45em',
    //       borderRadius: '50px',
    //     },
    //   },
    // },
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: '50px',
    //       paddingLeft: '1.3em',
    //       paddingRight: '1.3em',
    //       paddingTop: '0.75em',
    //       paddingBottom: '0.75em',
    //     },
    //   },
    //   variants: [
    //     {
    //       // Come back to this
    //       props: { variant: 'contained' },
    //       style: {
    //         borderColor: '#000000',
    //         color: '#000000',
    //       },
    //     },
    //   ],
    // },
    // MuiAccordion: {
    //   // Work in progress
    //   styleOverrides: {
    //     root: {
    //       borderRadius: '32px',
    //       border: 'none',
    //       boxShadow: 'none',
    //       backgroundColor: '#EEF1EC',
    //     },
    //   },
    // },
  },
});

export default theme;
