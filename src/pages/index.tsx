import type { GetServerSidePropsContext } from 'next';
import { useEffect } from 'react';

import protectedRoutes from '../core/utils/protected-routes';
import Home, { IHome } from '../templates/home';

const Index = ({ user }: IHome) => {
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Home user={user} />
  );
};

export default Index;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  return {
    props: { ...session },
  };
}
