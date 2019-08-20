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
import { SEO } from '../src/components/SEO';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/pages/_app';
import { configureStore } from '../src/model/store';
import { RootState } from '../src/model/types';
import { SSRError } from '../src/lib/SSRError';

const Layout = dynamic(() =>
  import('../src/features/ui/Layout').then(module => module.Layout as any)
);

class MyApp extends App<{ store: Store<RootState>; statusCode?: number }> {
  static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: NextComponentType;
    ctx: NextPageContext;
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      try {
        pageProps = await Component.getInitialProps(ctx);
      } catch (e) {
        if (e instanceof SSRError) {
          return {
            statusCode: e.statusCode,
            pageProps,
          };
        }

        return {
          statusCode: 500,
          pageProps,
        };
      }
    }

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
    const { Component, pageProps, store, statusCode } = this.props;

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
                  {statusCode ? (
                    <h1>{statusCode}</h1>
                  ) : (
                    <Component {...pageProps} />
                  )}
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
