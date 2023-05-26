import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const router = useRouter();

  return (
    <div className="absolute bottom-0 text-xs md:text-sm breadcrumbs left-3 xs:left-6 md:left-8 2xl:left-10">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {router.pathname == '/' && <li>Most Popular</li>}
        {router.pathname == '/404' && <li>Error 404</li>}
        {router.pathname == '/search' && <li>Search</li>}
        {router.pathname == '/search/[slug]' && (
          <>
            <li>
              <Link href="/search">Search</Link>
            </li>
            <li className="pr-5 truncate">
              <span className="truncate">
                {router.asPath.substring(8).replaceAll('%20', ' ')}
              </span>
            </li>
          </>
        )}
        {router.pathname == '/show-details/[slug]' && (
          <>
            <li className="pr-5 truncate">
              <span className="pr-1">TV Show Details for:</span>
              <span className="uppercase truncate">
                {router.asPath.substring(14).replaceAll('-', ' ')}
              </span>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
