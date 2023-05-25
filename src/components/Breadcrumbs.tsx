import Link from 'next/link';
import React from 'react';

type Props = {};

const Breadcrumbs = (props: Props) => {
  return (
    <div className="text-xs md:text-sm breadcrumbs absolute bottom-0 left-3 xs:left-6 md:left-8 2xl:left-10">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>Most Popular</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
