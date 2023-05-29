import Image from "next/image";
import React, { ReactElement, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import NoImage from "../../public/images/no-image-png-2.png";
import { Autoplay, Pagination, Navigation } from "swiper";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type Props = {
  details: Provider;
};

interface Provider {
  id: number;
  name: string;
  permalink: string;
  url: string;
  description: any;
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
  rating: any;
  rating_count: string;
  countdown: string | null;
  genres: Array<string>;
  pictures: Array<string>;
  episodes: Array<Object>;
}

function formatDate(date: string) {
  // Split the date and time
  const [datePart] = date.split(" ");

  // Split the year, month, and day
  const [year, month, day] = datePart.split("-");

  // Format the date to "YYYY/MM/DD"
  const formattedDate = `${year}/${month}/${day}`;
  return formattedDate;
}

const ShowDetails = ({ details }: Props) => {
  const output: any = details.episodes
    ?.map((x: any) => ({ ...x, air_date: formatDate(x.air_date) }))
    .reduce((acc: any, item: any) => {
      const composedArr = [...acc];

      if (composedArr[item.season - 1]) {
        composedArr[item.season - 1].push(item);
      } else {
        composedArr[item.season - 1] = [item];
      }
      return composedArr;
    }, []);

  const [isCollapsed, setIsCollapsed] = useState(true);
  const rating = parseInt(details.rating) || 0;
  const formattedRating = rating.toFixed(0);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-col w-full gap-6 pb-8 md:grid md:grid-cols-7 containerLayout">
      <div className="md:col-span-3 xl:col-span-2">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              priority
              src={details.image_path || NoImage}
              alt=""
              width={100000}
              height={100000}
              sizes="100vw"
              className="w-full object-cover transition-all h-auto min-h-[500px] max-h-[500px] rounded"
            />
          </SwiperSlide>
          {details.pictures != undefined &&
            details.pictures.map((picture: any, i: any) => (
              <SwiperSlide key={i}>
                <Image
                  src={picture || NoImage}
                  alt=""
                  width={100000}
                  height={100000}
                  sizes="100vw"
                  className="w-full object-cover transition-all h-auto min-h-[500px] max-h-[500px] rounded-lg"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-5 md:col-span-4 xl:col-span-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-4xl font-semibold">Description</h3>
            <span className="w-full h-0.5 bg-white rounded-full" />
          </div>
          <p className="text-justify line-clamp-[7]"></p>
          <div className="overflow-hidden text-justify">
            <p
              dangerouslySetInnerHTML={{ __html: details.description }}
              className={`${isCollapsed ? "line-clamp-[4] " : "h-auto "}`}
            />
          </div>
          <button
            className="flex justify-center mt-0 text-blue-500 hover:underline"
            onClick={toggleCollapse}
          >
            {isCollapsed ? (
              <FiChevronDown size={24} />
            ) : (
              <FiChevronUp size={24} />
            )}
          </button>
          <span className="w-full h-0.5 bg-gray-800 rounded-full" />
        </div>
        <div className="grid w-full grid-cols-2 gap-3 md:text-lg pb-6">
          <div>
            <b>Genres</b>:{" "}
            {details.genres != undefined &&
              details.genres.map((genre: any, i: any) => (
                <span key={i}>
                  <span className="cursor-default hover:text-gray-400">
                    {genre}
                  </span>
                  {i !== details.genres.length - 1 && <span> | </span>}
                </span>
              ))}
          </div>
          <div>
            <b>Network</b>: <span>{details.network || "UNDEFINED"}</span> (
            {details.country})
          </div>
          <div>
            <b>Status</b>: <span>{details.status || "UNDEFINED"}</span>
          </div>
          <div>
            <b>Start date</b>: <span>{details.start_date || "UNDEFINED"}</span>
          </div>
          <div>
            <b>Rating</b>:{" "}
            <span>
              {formattedRating || 0}/10 ({details.rating_count} ratings)
            </span>
          </div>
          {details.youtube_link != null && (
            <div>
              <b>Promo video</b>:{" "}
              <span>
                <a
                  className="underline underline-offset-2 text-cyan-600"
                  target="_blank"
                  rel="noopener"
                  href={`https://www.youtube.com/watch?v=${details.youtube_link}`}
                >
                  Youtube
                </a>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="w-full col-span-7">
        <div className="flex flex-col gap-1 mb-6">
          <h3 className="text-4xl font-semibold">Episodes</h3>
          <span className="w-full h-0.5 bg-white rounded-full" />
        </div>
        {output != undefined &&
          output.map((season: any, i: any) => (
            <div
              key={i}
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-3"
            >
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                <div className="underline text-xl font-semibold">{`Season ${
                  i + 1
                }`}</div>
              </div>
              <div className="collapse-content flex flex-col gap-2">
                {season.map((episode: any, index: any) => {
                  return (
                    <div
                      className="w-full flex justify-between gap-1 text-sm md:text-base truncate"
                      key={index}
                    >
                      <div className="flex gap-1 truncate">
                        <span>Episode {episode.episode} -</span>
                        <span className="truncate">{episode.name}</span>
                      </div>
                      <span>Air date: {episode.air_date}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowDetails;
