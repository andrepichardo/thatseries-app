import Layout from '@/components/Layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { getShowDetails } from '../api/axios';
import { useState, useEffect } from 'react';
import PageButton from '@/components/PageButton';
import Skeleton from '@/components/Skeleton';
import TitleBanner from '@/components/common/TitleBanner';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/router';
import SearchResults from '@/components/Search/SearchResults';

export default function DetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [showTitle, setShowTitle] = useState<any>(slug);

  useEffect(() => {
    if (slug) {
      setShowTitle(slug);
    }
  }, [slug]);

  const {
    isLoading,
    isError,
    error,
    data: showDetails,
    isFetching,
  } = useQuery(['/search', showTitle], () => getShowDetails(showTitle));

  if (isLoading) return <Skeleton />;

  if (error instanceof Error) {
    if (isError) return <p>Error: {error.message}</p>;
  }

  const content = showDetails.tvShows.map((results: any) => (
    <SearchResults key={results.id} search={results} />
  ));

  return (
    <Layout title={`Results for '${slug}'`}>
      <div className="bg-[#1c2532] h-full">
        <TitleBanner title={`Results for: ${slug}`} />

        {isFetching ? (
          <div className="grid w-full pb-5 containerLayout xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-3 md:gap-6">
            {[...Array(20)].map((e, i) => (
              <div
                className="w-full animate-[pulse_1s_infinite] bg-gray-700 h-auto min-h-[314px] max-h-[314px] lg:min-h-[384px] lg:max-h-[384px] rounded-lg"
                key={i}
              />
            ))}
          </div>
        ) : (
          <div className="grid w-full grid-cols-1 pb-5 containerLayout xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-3 md:gap-6">
            {content}
          </div>
        )}
      </div>
    </Layout>
  );
}
