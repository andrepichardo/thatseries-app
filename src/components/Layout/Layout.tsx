import { ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from './Navbar';
import { Lato } from '@next/font/google';
const LatoFont = Lato({ weight: '400', subsets: ['latin'] });

interface Props {
  children?: ReactNode;
  title?: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <div className={LatoFont.className}>
      <Head>
        <title>{title ? 'ThatSeriesApp | ' + title : 'ThatSeriesApp'}</title>
        <meta name="description" content="TV Series Database " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col text-white w-full h-full min-h-screen justify-between bg-[#1c2532]">
        <Navbar />
        <main className="mt-24">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
