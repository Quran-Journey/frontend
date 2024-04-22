import * as React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

/**
 * Represents a custom document class for Next.js.
 * This class extends the base Document class provided by Next.js.
 * It is responsible for rendering the HTML structure of the application.
 *
 * @extends Document
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body style={{ margin: '0'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/**
 * Retrieves the initial props for the MyDocument component.
 *
 * @param {DocumentContext} ctx - The document context object.
 * @returns {Promise<object>} - The initial props object.
 */
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};

export default MyDocument;
