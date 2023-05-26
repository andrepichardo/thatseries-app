import { useRouter } from 'next/router';
import Layout from './Layout/Layout';
import TitleBanner from './common/TitleBanner';

const DetailSkeleton = () => {
  return (
    <Layout title="Loading...">
      <TitleBanner title="TV Show Details: Loading..." />
      <div className="w-full pb-5 containerLayout">
        <div className="w-full animate-[pulse_1s_infinite] bg-gray-700 h-auto min-h-[500px] rounded-lg" />
      </div>
    </Layout>
  );
};

export default DetailSkeleton;
