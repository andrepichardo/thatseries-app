import React from 'react';

type Props = {
  title: string;
};

const TitleBanner = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-2 pb-5 containerLayout">
      <h1 className="font-bold w-fit whitespace-nowrap xs:text-xl md:text-3xl">
        {title}
      </h1>
      <span className="w-full h-[2px] rounded-full mt-2 bg-white" />
    </div>
  );
};

export default TitleBanner;
