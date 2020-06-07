/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { useEffectMount } from '@hooks';
import { ThemeProvider } from 'styled-components';
import { Normalize } from '@components';
import { theme } from '../theme';

const onMount = () => {
  const jssStyles = document.querySelector('#jss-server-side');

  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles);
  }
};

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  useEffectMount(onMount);

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
