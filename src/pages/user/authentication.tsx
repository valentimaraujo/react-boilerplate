import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Login from 'templates/user/login';

const Authentication: NextPage = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<boolean>(false);

  const handleSignIn = async ({ email, password }: { email: string, password: string }) => {
    setLoginError(false);
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setLoginError(false);
    } else {
      router.push('/');
    }
  };

  return (
    <>
      <Head>
        <title>User Athentication</title>
      </Head>
      <Login handlerAuthentication={handleSignIn} loginError={loginError} />
    </>
  );
};

export default Authentication;
