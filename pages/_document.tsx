import React from 'react';
import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  Head,
} from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';

export default class extends Document {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const muiStyles = new MaterialUiServerStyleSheets();
    const scSheets = new StyledComponentSheets();

    const renderPageResult = await renderPage({
      enhanceApp: (App) => (props) =>
        muiStyles.collect(scSheets.collectStyles(<App {...props} />)),
    });

    return {
      ...renderPageResult,
      styles: [...scSheets.getStyleElement(), muiStyles.getStyleElement()],
    };
  }

  render() {
    const { styles } = this.props;

    return (
      <Html>
        <Head>{styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
