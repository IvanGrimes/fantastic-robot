import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import './_app.scss';
import { configService } from '@model';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const config = configService.useService();

  useEffect(() => {
    if (config.isInit(config)) {
      config.effect([]);
    }
  }, [config]);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...pageProps} />
  );
};

export default App;
