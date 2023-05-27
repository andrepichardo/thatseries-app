import { useRouter } from 'next/router';
import Layout from './Layout/Layout';
import TitleBanner from './common/TitleBanner';

const Skeleton = () => {
  const router = useRouter();

  return (
    <Layout title="Loading...">
      <TitleBanner
        title={
          router.asPath === '/'
            ? 'Most Popular TV Shows'
            : `Results for: Loading...`
        }
      />
      <div className="grid w-full pb-5 containerLayout xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-3 md:gap-6">
        {[...Array(20)].map((_, i) => (
          <div
            className="w-full animate-[pulse_1s_infinite] bg-gray-700 h-auto min-h-[464px] max-h-[464px] xs:min-h-[324px] xs:max-h-[324px] lg:min-h-[384px] lg:max-h-[384px] rounded-lg"
            key={i}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Skeleton;
