import React from 'react';
import App, { AppContext } from 'next/app';
import { CssBaseline } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import withRedux from 'next-redux-wrapper';
import withSaga from 'next-redux-saga';
import { NextPageContext as PageContext } from 'next';
import { SEO } from '../src/components/SEO';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/pages/_app';
import { RootState } from '../src/model/types';
import {
  fetchConfigAsync,
  fetchMetroListAsync,
} from '../src/features/studioData/model/actions';
import { configureStore } from '../src/model/store';
import { botGuard } from '../src/lib/botGuard';

// TODO: Сверстать страницу студии

const Layout = dynamic(() =>
  import('../src/features/ui/components/Layout').then(
    module => module.Layout as any
  )
);

type AppStore = Store<RootState>;

export type NextPageContext = PageContext & { store: AppStore };

// @ts-ignore
class MyApp extends App<{
  store: AppStore;
  statusCode?: number;
  isBot?: boolean;
}> {
  static fetchData(store: AppStore) {
    store.dispatch(fetchMetroListAsync.request({ city: 'moscow' }));
    store.dispatch(fetchConfigAsync.request());
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
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </MuiThemeProvider>
        </React.Fragment>
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withSaga(MyApp));
