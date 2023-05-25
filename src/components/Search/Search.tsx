import { getSearch } from '@/pages/api/axios';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React from 'react';
import { useState, useRef } from 'react';
import { FiSearch } from 'react-icons/fi';

export const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');
  const [mobileSearch, setMobileSearch] = useState(false);
  const router = useRouter();

  const handleShowMobileSearch = () => {
    setMobileSearch(!mobileSearch);
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  };

  const handleSearch = () => {
    if (search.length > 0) {
      router.push(`/search/${search}`);
    }
    if (mobileSearch == true && search.length > 0) {
      setMobileSearch(false);
    }
    setSearch('');
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleSearch();
      if (mobileSearch == true && search.length > 0) {
        setMobileSearch(false);
      }
    }
  };
  return (
    <div>
      <div className="absolute items-center hidden h-10 md:flex md:left-8 2xl:left-10 top-5 ">
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search by TV Show..."
          className="h-[35px] pl-3 pr-10 text-sm font-semibold transition-all duration-300 rounded-full outline-none focus:ring-2 ring-2 ring-transparent focus:ring-cyan-700 md:w-48 lg:w-60 placeholder:text-xs text-cyan-600"
          type="search"
        />
        <button
          type="submit"
          onClick={handleSearch}
          title="Search by TV Show..."
          className="absolute flex items-center justify-center w-10 h-full text-white transition-all border border-transparent rounded-full active:scale-90 active:bg-white active:border-cyan-700 active:text-cyan-700 -right-1 hover:bg-cyan-600 bg-cyan-700"
        >
          <FiSearch size={18} />
        </button>
      </div>

      <button
        title="Search by TV Show..."
        onClick={handleShowMobileSearch}
        className="absolute flex items-center justify-center text-white transition-all border border-transparent rounded-full md:hidden active:scale-95 active:bg-white active:border-cyan-700 active:text-cyan-700 left-3 xs:left-6 top-5 h-11 w-11 hover:bg-cyan-600 bg-cyan-700"
      >
        <FiSearch size={20} />
      </button>
      <div
        className={
          mobileSearch
            ? 'w-11/12 max-w-lg left-0 px-3 top-5 right-0 fixed mx-auto z-50 transition-all duration-500'
            : 'w-11/12 max-w-lg left-0 px-3 top-[-100%] right-0 fixed mx-auto z-50 transition-all duration-500'
        }
      >
        <input
          ref={inputRef}
          onClick={(e) => {
            e.stopPropagation();
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search by TV Show..."
          className="w-full py-4 pl-4 font-semibold rounded-full outline-none pr-14 text-cyan-600"
          type="search"
        />
        <FiSearch
          onClick={handleSearch}
          title="Search by TV Show..."
          className="absolute top-0 bottom-0 my-auto text-gray-400 transition-all rounded-full cursor-pointer right-8 hover:text-gray-300"
          size={20}
        />
      </div>
      {mobileSearch ? (
        <div
          onClick={() => setMobileSearch(!mobileSearch)}
          className="fixed top-0 left-0 z-10 w-full h-full min-h-screen transition-all duration-500 bg-black/60"
        />
      ) : (
        <div className="fixed top-0 left-0 z-10 invisible w-full h-full min-h-screen transition-all duration-500 bg-transparent" />
      )}
    </div>
  );
};
