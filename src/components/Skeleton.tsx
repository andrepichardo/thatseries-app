import { useRouter } from 'next/router';
import Layout from './Layout/Layout';
import TitleBanner from './common/TitleBanner';

const Skeleton = () => {
  const router = useRouter();

  return (
    <Layout title="Loading...">
      <TitleBanner
        title={
          router.asPath === '/' || router.asPath === '/most-popular'
            ? 'Most Popular TV Shows'
            : `Resultado de búsqueda para: Titulo`
        }
      />
      <div className="grid w-full pb-5 containerLayout xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-3 md:gap-6">
        {[...Array(20)].map((_, i) => (
          <div
            className="w-full animate-[pulse_1s_infinite] bg-gray-700 h-auto min-h-[314px] max-h-[314px] lg:min-h-[384px] lg:max-h-[384px] rounded-lg"
            key={i}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Skeleton;
