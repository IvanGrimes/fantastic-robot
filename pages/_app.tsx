/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { configService } from '@model';
import { useEffectMount } from '@hooks';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const onMount = () => {
  const jssStyles = document.querySelector('#jss-server-side');

  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles);
  }
};

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const config = configService.useService();

  useEffectMount(onMount);

  useEffect(() => {
    if (config.isInit(config)) {
      config.effect([]);
    }
  }, [config]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
