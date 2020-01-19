import React from 'react';
import App, { AppContext } from 'next/app';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import withRedux from 'next-redux-wrapper';
import withSaga from 'next-redux-saga';
import { NextPageContext as PageContext } from 'next';
import { initializeAsync } from '@modules/auth/model/actions';
import { onMount } from '@modules/services/model/service';
import { botGuard } from '@modules/services/utils/botGuard';
import { MediaQueryProvider } from '@modules/ui/hooks';
import { SEO, GlobalStyles } from '@modules/ui/components';
import * as studio from '@modules/studio';
import { theme } from '@theme/index';
import { RootState } from '@model/types';
import { configureStore } from '@model/store';
import { UAParser } from 'ua-parser-js';
import mediaQuery from 'css-mediaquery';

type AppStore = Store<RootState>;

export type NextPageContext = PageContext & { store: AppStore };

type DeviceType = 'mobile' | 'tablet';

const getWidthByDevice = (device: DeviceType) => {
  switch (device) {
    case 'mobile':
      return theme.breakpoints.values.xs;
    case 'tablet':
      return theme.breakpoints.values.md;
    default:
      return theme.breakpoints.values.xl;
  }
};

// @ts-ignore
class MyApp extends App<{
  store: AppStore;
  statusCode?: number;
  isBot?: boolean;
  matchMedia?: (query: string) => boolean;
}> {
  static fetchData(store: AppStore) {
    store.dispatch(
      studio.data.actions.fetchMetroListAsync.request({ city: 'moscow' })
    );
    store.dispatch(studio.data.actions.fetchConfigAsync.request());
  }

  static getWidth({ req }: NextPageContext) {
    if (req) {
      const parser = new UAParser(req.headers['user-agent']);
      const width = getWidthByDevice(parser.getDevice().type as DeviceType);

      return (query: string) =>
        mediaQuery.match(query, {
          width: `${width}px`,
        });
    }

    return undefined;
  }

  static async getInitialProps({
    Component,
    ctx,
  }: AppContext & { ctx: { store: AppStore } }) {
    let pageProps = {};
    const { req, store } = ctx;
    const isBot = req && botGuard(req);
    const matchMedia = MyApp.getWidth(ctx);

    if (Component.getInitialProps) {
      try {
        pageProps = Component.getInitialProps(ctx);
      } catch (e) {
        return {
          statusCode: e.statusCode,
          pageProps,
        };
      }
    }

    if (isBot) {
      MyApp.fetchData(store);
    }

    return {
      store,
      pageProps,
      isBot,
      matchMedia,
    };
  }

  static removeServerStyles() {
    const serverStyles = document.querySelector('#jss-server-side');

    if (serverStyles) {
      serverStyles.remove();
    }
  }

  componentDidMount() {
    const { store, isBot } = this.props;

    MyApp.removeServerStyles();

    if (!isBot) {
      onMount(store.dispatch);

      store.dispatch(initializeAsync.request());

      MyApp.fetchData(store);
    }
  }

  render() {
    const { store, Component, pageProps, matchMedia } = this.props;

    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <GlobalStyles />
          <SEO />
          <MediaQueryProvider matchMedia={matchMedia}>
            <MuiThemeProvider theme={theme}>
              <ThemeProvider theme={theme}>
                <Component {...pageProps} />
              </ThemeProvider>
            </MuiThemeProvider>
          </MediaQueryProvider>
        </React.Fragment>
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withSaga(MyApp));
