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
import { GlobalStyles, SEO } from '@modules/ui/components';
import * as studio from '@modules/studio';
import { botGuard } from '@modules/services/utils/botGuard';
import { theme } from '@theme/index';
import { RootState } from '@model/types';
import { configureStore } from '@model/store';

type AppStore = Store<RootState>;

export type NextPageContext = PageContext & { store: AppStore };

// @ts-ignore
class MyApp extends App<{
  store: AppStore;
  statusCode?: number;
  isBot?: boolean;
}> {
  static fetchData(store: AppStore) {
    store.dispatch(
      studio.data.actions.fetchMetroListAsync.request({ city: 'moscow' })
    );
    store.dispatch(studio.data.actions.fetchConfigAsync.request());
  }

  static async getInitialProps({
    Component,
    ctx,
  }: AppContext & { ctx: { store: AppStore } }) {
    let pageProps = {};
    const { req, store } = ctx;
    const isBot = req && botGuard(req);

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
      MyApp.fetchData(store);
    }
  }

  render() {
    const { store, Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <GlobalStyles />
          <SEO />
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </MuiThemeProvider>
        </React.Fragment>
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withSaga(MyApp));
