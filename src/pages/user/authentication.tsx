import Head from 'next/head';

import { NextPageWithLayout } from '../page';

const Authentication: NextPageWithLayout = () => (
  <div>
    <Head>
      <title className="container">Login</title>
    </Head>
    <h1>User Authentication</h1>
  </div>
);

export default Authentication;
