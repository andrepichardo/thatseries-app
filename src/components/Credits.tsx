import Image from 'next/image';
import LogoEpisoDate from '../../public/logo-episodate.svg';

const Credits = () => {
  return (
    <div className="flex flex-col items-end absolute right-3 xs:right-6 md:right-8 2xl:right-10 top-5">
      <span className="text-[10px] md:text-sm">Powered by</span>
      <Image
        src={LogoEpisoDate}
        width="0"
        height="0"
        alt="Logo EpisoDate"
        className="w-12 md:w-16"
      />
    </div>
  );
};

export default Credits;
