import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider, EmotionCache } from '@emotion/react';
import App, { AppProps } from 'next/app';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import theme from '../styles/theme/theme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

interface QJAppProps extends AppProps {
  emotionCache: EmotionCache;
}

class QJApp extends App<QJAppProps> {
  render() {
    const emotionCache = clientSideEmotionCache;
    const { Component, pageProps } = this.props;

    return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    );
  }
}

export default QJApp;
