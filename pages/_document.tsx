import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { createStore } from '../model';
import { GlobalStaticStylesManager } from '../utils';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>{GlobalStaticStylesManager.getInstance().renderToString()}</Head>
        <body>
          <Main />
          <NextScript />
          {createStore.renderToString()}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
