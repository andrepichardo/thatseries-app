import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbListDetails } from 'react-icons/tb';

type Props = {
  details: Provider;
};

interface Provider {
  id: number;
  name: string;
  permalink: string;
  url: string;
  description: string;
  description_source: string;
  start_date: string;
  end_date: string | null;
  country: string;
  status: string;
  runtime: number;
  network: string;
  youtube_link: string | null;
  image_path: string;
  image_thumbnail_path: string;
  rating: string | number;
  rating_count: string;
  countdown: string | null;
  genres: Array<string>;
  pictures: Array<string>;
  episodes: Array<Object>;
}

const ShowDetails = ({ details }: Props) => {
  return (
    <div
      title={details.name}
      className="font-semibold truncate whitespace-nowrap"
    >
      {details.name}
    </div>
  );
};

export default ShowDetails;
