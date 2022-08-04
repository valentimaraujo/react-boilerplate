import Head from 'next/head';
import Link from 'next/link';

export interface ILayout {
  children: React.ReactNode;
  sampleTextProp: string;
}

const Layout = ({ children, sampleTextProp = 'items-center' }: ILayout) => (
  <>
    <Head>
      <title>NextJs Fullstack App Template</title>
    </Head>
    <div>
      <p>{sampleTextProp}</p>
        &nbsp;&nbsp;&nbsp;
      <Link href="user/authentication">User Authentication</Link>
        &nbsp;&nbsp;&nbsp;
      <Link href="/">Home Page</Link>
      <main className="px-5">{children}</main>
      <div className="m-auto" />
    </div>
  </>
);

export default Layout;
