import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbListDetails } from 'react-icons/tb';
import NoImage from '../../../public/images/no-image-png-2.png';

type Props = {
  search: Provider;
};

interface Provider {
  id: null;
  name: string;
  permalink: string;
  start_date: string;
  end_date: string | null;
  country: string;
  network: string;
  status: string;
  image_thumbnail_path: string;
}

const SearchResults = ({ search }: Props) => {
  return (
    <Link href={`/show-details/${search.permalink}`}>
      <div className="flex flex-col w-full shadow-2xl text-cyan-900 shadow-gray-900">
        <div className="relative group">
          {!search.image_thumbnail_path.includes('tv-show') ? (
            <Image
              priority
              src={NoImage}
              alt=""
              width={100000}
              height={100000}
              sizes="100vw"
              className="w-full object-cover group-hover:opacity-10 transition-all h-auto min-h-[260px] max-h-[260px] lg:min-h-[320px] lg:max-h-[320px] rounded-t-lg"
            />
          ) : (
            <Image
              priority
              src={search.image_thumbnail_path}
              alt=""
              width={100000}
              height={100000}
              sizes="100vw"
              className="w-full object-cover group-hover:opacity-10 transition-all h-auto min-h-[260px] max-h-[260px] lg:min-h-[320px] lg:max-h-[320px] rounded-t-lg"
            />
          )}
          <div className="absolute transition-all -z-50 group-hover:z-50 group-hover:block top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <p className="pt-2 pb-1 text-sm text-center text-white truncate md:text-base">
              <b>Network</b>:{' '}
              <span title={search.network}>
                {search.network?.length > 12
                  ? search.network.substring(0, 12) + '...'
                  : search.network || 'UNDEFINED'}
              </span>{' '}
              ({search.country})
            </p>
            <p className="pb-4 text-sm text-center text-white truncate md:text-base">
              <b>Start date</b>: {search.start_date}
            </p>
            <button className="text-center w-fit mx-auto px-2 flex items-center justify-center gap-2 py-1.5 rounded-lg whitespace-nowrap bg-white text-gray-700 hover:bg-[#eedeee] transition-all font-bold uppercase text-xs md:text-sm cursor-pointer">
              <TbListDetails size={20} /> View Details
            </button>
          </div>
        </div>
        <div className="bg-white rounded-b-lg py-2 px-2.5 flex flex-col gap-1">
          <div className="flex items-center justify-between truncate">
            <p
              title={search.name}
              className="font-semibold truncate whitespace-nowrap"
            >
              {search.name}
            </p>
            <p
              title={search.network}
              className="text-sm text-white rounded-full truncate bg-cyan-700 px-2 py-0.5"
            >
              {search.network || 'UNDEFINED'}
            </p>
          </div>
          <p className="text-sm">
            Status:{' '}
            <span className="font-semibold underline underline-offset-2">
              {search.status}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SearchResults;
