import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'style/global';

function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line no-console
  console.log('qualquer_coisa');
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link rel="shortcut icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
