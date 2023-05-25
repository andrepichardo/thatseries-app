import Layout from '@/components/Layout/Layout';
import { useQuery } from '@tanstack/react-query';
import { getSearch } from '../api/axios';
import { useState, useEffect } from 'react';
import PageButton from '@/components/PageButton';
import Skeleton from '@/components/Skeleton';
import TitleBanner from '@/components/common/TitleBanner';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/router';
import SearchResults from '@/components/Search/SearchResults';

export default function SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const { slug } = router.query;
  const [search, setSearch] = useState<any>(slug);

  useEffect(() => {
    if (slug) {
      setSearch(slug);
    }
  }, [slug]);

  const {
    isLoading,
    isError,
    error,
    data: searchResults,
    isFetching,
    isPreviousData,
    refetch,
  } = useQuery(['/search', currentPage], () => getSearch(currentPage, search));

  useEffect(() => {
    refetch(search);
  }, [search, refetch]);

  const getPageGroup = () => {
    const totalPages = searchResults.pages;
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

  const content = searchResults.tv_shows.map((results: any) => (
    <SearchResults key={results.id} search={results} />
  ));

  const nav = (
    <div
      className={
        search != undefined
          ? 'flex justify-center my-8 btn-group containerLayout'
          : 'hidden'
      }
    >
      <button
        className="btn-xs md:btn"
        onClick={prevPage}
        disabled={isPreviousData || currentPage === 1 || content.length == 0}
      >
        <FiChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
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
        className="btn-xs md:btn"
        onClick={nextPage}
        disabled={
          isPreviousData ||
          currentPage === searchResults.pages ||
          content.length == 0
        }
      >
        <FiChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>
    </div>
  );

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
            {slug != undefined && search != undefined ? (
              content.length > 0 ? (
                content
              ) : (
                <div className="flex justify-center items-center w-full h-[400px] col-span-full font-semibold text-4xl">
                  No Results Found... Try Again.
                </div>
              )
            ) : (
              'Look for Any TV Show Typing in the Search Engine Above.'
            )}
          </div>
        )}
        {nav}
      </div>
    </Layout>
  );
}
