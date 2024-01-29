import React from 'react';
import { AppProps } from 'next/app';

const QJApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default QJApp;
