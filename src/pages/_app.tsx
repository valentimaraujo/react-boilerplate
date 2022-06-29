import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'style/global';

function App({ Component, pageProps }: AppProps) {
  const variavelInvalida = 'String';
  console.log(variavelInvalida);

  return (
    <>
      <Head>
        <title>React Avançado</title>
        <link rel="shortcut icon" href="/img/icon-192.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
