import React from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import './_app.scss';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default App;
