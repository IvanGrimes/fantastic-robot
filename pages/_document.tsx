import React from "react";
import Document, {
  Head,
  Main,
  DocumentContext,
  NextScript
} from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheets = new ServerStyleSheets();
    const scSheets = new ServerStyleSheet();

    const renderPageResult = await renderPage({
      enhanceApp: App => props =>
        sheets.collect(scSheets.collectStyles(<App {...props} />))
    });

    return {
      ...renderPageResult,
      styles: [...scSheets.getStyleElement(), sheets.getStyleElement()]
    };
  }

  render() {
    return (
      <html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
