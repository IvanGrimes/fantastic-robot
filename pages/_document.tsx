import React from 'react';
import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document';
import { createStore } from '@model';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      const initialProps = await Document.getInitialProps(ctx);

      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(
              // eslint-disable-next-line react/jsx-props-no-spreading
              materialUiSheets.collect(<App {...props} />)
            ),
        });

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    const { styles } = this.props;

    return (
      <Html>
        <Head>{styles}</Head>
        <body>
          <Main />
          <NextScript />
          {createStore.renderToString()}
        </body>
      </Html>
    );
  }
}
