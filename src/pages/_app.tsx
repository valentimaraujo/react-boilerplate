import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'style/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/vercel.svg" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
