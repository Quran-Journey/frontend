import React from 'react';
import { AppProps } from 'next/app';

/**
 * QJApp function component.
 *
 * @param Component - The component to render.
 * @param pageProps - The props to pass to the component.
 * @returns The rendered component.
 */
const QJApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default QJApp;
