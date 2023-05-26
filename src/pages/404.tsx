import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import React from 'react';

type Props = {};

const Page404 = (props: Props) => {
  return (
    <Layout title="Error 404">
      <div className="flex flex-col items-center justify-center w-full px-5 py-3 h-[400px] gap-2 text-center">
        <h2 className="text-8xl md:text-9xl">404</h2>
        <p className="text-xl md:text-5xl">Page not Found</p>
        <Link className="mt-4" href="/">
          <button className="px-5 py-1 text-sm font-semibold uppercase transition-all rounded-full bg-cyan-800 hover:scale-110 ">
            Back to Home
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default Page404;
