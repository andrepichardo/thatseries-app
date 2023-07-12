import Layout from '@/components/Layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { getShowDetails } from '../api/axios';
import { useState, useEffect } from 'react';
import TitleBanner from '@/components/common/TitleBanner';
import { useRouter } from 'next/router';
import ShowDetails from '@/components/ShowDetails';
import DetailSkeleton from '@/components/DetailSkeleton';
import FSkeleton from '@/components/FSkeleton';

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
  } = useQuery(['/show-details', showTitle], () => getShowDetails(showTitle));

  if (isLoading) return <DetailSkeleton />;

  if (error instanceof Error) {
    if (isError) return <p>Error: {error.message}</p>;
  }

  const content = <ShowDetails details={showDetails.tvShow} />;

  return (
    <Layout title={`TV Show Details: ${showDetails.tvShow.name}`}>
      <div className="bg-[#1c2532] h-full">
        <TitleBanner title={`TV Show Details: ${showDetails.tvShow.name}`} />

        {isFetching ? <FSkeleton /> : content}
      </div>
    </Layout>
  );
}
