import type { GetServerSidePropsContext } from 'next';

import protectedRoutes from '../core/utils/protected-routes';
import Home, { IHome } from '../templates/home';

const Index = ({ user }: IHome) => (
  <Home user={user} />
);

export default Index;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);
  return {
    props: { ...session },
  };
}
