import Layout from '@/components/Layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { getMostPopular } from './api/axios';
import { ReactElement, useState } from 'react';
import MostPopular from '@/components/MostPopular';
import PageButton from '@/components/PageButton';
import Skeleton from '@/components/Skeleton';
import TitleBanner from '@/components/common/TitleBanner';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    isLoading,
    isError,
    error,
    data: populars,
    isFetching,
    isPreviousData,
  } = useQuery(
    ['/most-popular', currentPage],
    () => getMostPopular(currentPage),
    {
      keepPreviousData: true,
    }
  );

  const getPageGroup = () => {
    const totalPages = populars.pages;
    const pageGroup = [];
    const startPage = Math.max(currentPage - 5, 1);
    const endPage = Math.min(startPage + 9, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageGroup.push(i);
    }

    return pageGroup;
  };

  if (isLoading) return <Skeleton />;

  if (error instanceof Error) {
    if (isError) return <p>Error: {error.message}</p>;
  }

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  const content = populars.tv_shows.map((popular: any) => (
    <MostPopular key={popular.id} popular={popular} />
  ));

  const nav = (
    <div className="flex justify-center my-8 btn-group containerLayout">
      <button
        className="btn"
        onClick={prevPage}
        disabled={isPreviousData || currentPage === 1}
      >
        <FiChevronLeft size={20} />
      </button>
      {getPageGroup().map((pg) => (
        <PageButton
          page={currentPage}
          key={pg}
          pg={pg}
          setPage={setCurrentPage}
          isPreviousData={isPreviousData}
        />
      ))}
      <button
        className="btn"
        onClick={nextPage}
        disabled={isPreviousData || currentPage === populars.pages}
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );

  return (
    <Layout title="Home">
      <div className="bg-[#1c2532] h-full">
        <TitleBanner title="Most Popular TV Shows" />

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
          <div className="grid w-full pb-5 containerLayout xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-4 gap-x-3 md:gap-6">
            {content}
          </div>
        )}
        {nav}
      </div>
    </Layout>
  );
}
