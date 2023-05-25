import Layout from '@/components/Layout/Layout';
import React from 'react';

type Props = {};

const Page404 = (props: Props) => {
  return (
    <Layout title="Error 404">
      <div className="containerLayout">404</div>
    </Layout>
  );
};

export default Page404;
