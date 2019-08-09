import React from 'react';
import App, { Container } from 'next/app';
import { NextComponentType, NextPageContext } from 'next';
import { CssBaseline } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { SEO } from '../components/SEO';
import { theme } from '../theme';
import { GlobalStyles } from '../components/_app';
import { configureStore } from '../redux/store';
import { RootState } from '../redux/types';

const Layout = dynamic(() =>
  import('../components/Layout').then(module => module.Layout as any)
);

class MyApp extends App<{ store: Store<RootState> }> {
  static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: NextComponentType;
    ctx: NextPageContext;
  }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return {
      pageProps,
    };
  }

  componentDidMount() {
    const serverStyles = document.querySelector('#jss-server-side');

    if (serverStyles) {
      serverStyles.remove();
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
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
      </Container>
    );
  }
}

export default withRedux(configureStore)(MyApp);
