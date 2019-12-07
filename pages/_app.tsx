import React from 'react';
import App from 'next/app';
import { CssBaseline } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { SEO } from '../src/components/SEO';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/pages/_app';
import { RootState } from '../src/model/types';
import {
  fetchConfigAsync,
  fetchMetroListAsync,
} from '../src/features/studioData/model/actions';
import { configureStore } from '../src/model/store';

const Layout = dynamic(() =>
  import('../src/features/ui/components/Layout').then(
    module => module.Layout as any
  )
);

const store = configureStore();

class MyApp extends App<{ store: Store<RootState>; statusCode?: number }> {
  static removeServerStyles() {
    const serverStyles = document.querySelector('#jss-server-side');

    if (serverStyles) {
      serverStyles.remove();
    }
  }

  static fetchData() {
    store.dispatch(fetchMetroListAsync.request({ city: 'moscow' }));
    store.dispatch(fetchConfigAsync.request());
  }

  componentDidMount() {
    MyApp.removeServerStyles();
    MyApp.fetchData();
  }

  render() {
    const { Component } = this.props;

    return (
      <Provider store={store}>
        <React.Fragment>
          <CssBaseline />
          <GlobalStyles />
          <SEO />
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              <Layout>
                <Component />
              </Layout>
            </ThemeProvider>
          </MuiThemeProvider>
        </React.Fragment>
      </Provider>
    );
  }
}

export default MyApp;
