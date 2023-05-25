import React from 'react';

type Props = {
  pg: number;
  setPage: any;
  isPreviousData: boolean;
  page: number;
};

const PageButton = ({ pg, setPage, isPreviousData, page }: Props) => {
  return (
    <button
      className={pg === page ? 'bg-cyan-800 btn' : 'btn'}
      onClick={() => setPage(pg)}
      disabled={isPreviousData}
    >
      {pg}
    </button>
  );
};

export default PageButton;
