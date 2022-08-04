import Head from 'next/head';

export interface ILayout {
  sampleTextProp: string;
}

const Layout = ({ sampleTextProp = 'items-center' }: ILayout) => (
  <>
    <Head>
      <title>NextJs Fullstack App Template</title>
    </Head>
    <div>
      <main className="px-5">{sampleTextProp}</main>
      <div className="m-auto" />
    </div>
  </>
);

export default Layout;
