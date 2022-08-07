import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Admin Tool</title>
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body className="overflow-x-hidden font-Poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
