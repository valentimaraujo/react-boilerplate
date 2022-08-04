import Head from 'next/head';

import { NextPageWithLayout } from '../page';
import { Button, Container, Title } from './authentication.style';

const Authentication: NextPageWithLayout = () => {
  const handlerBtnClick = () => {
    // eslint-disable-next-line no-console
    console.log('handlerBtnClick');
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <Title>Login</Title>
        <Button onClick={handlerBtnClick}>Butão</Button>
      </Container>
      <h1>User Authentication</h1>
    </div>
  );
};

export default Authentication;
