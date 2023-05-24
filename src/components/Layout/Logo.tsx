import { FiTv } from 'react-icons/fi';

const Logo = () => {
  return (
    <div className="bg-cyan-800 text-sm rounded-3xl relative shadow-xl flex items-center justify-center gap-0.5 px-2 py-1.5 md:px-3 md:py-1.5 md:text-2xl italic font-bold font-mono">
      ThatSeries
      <span className="text-white rounded-md px-1.5">App</span>
      <FiTv className="absolute w-9 h-9 md:w-14 md:h-14 right-[7.5px] md:right-2.5 bottom-0" />
    </div>
  );
};
export default Logo;
