import Link from 'next/link';
import { useRouter } from 'next/router';

const Breadcrumbs = () => {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className="absolute bottom-0 text-xs md:text-sm breadcrumbs left-3 xs:left-6 md:left-8 2xl:left-10">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {router.pathname == '/' && <li>Most Popular</li>}
        {router.pathname == `/search/[slug]` && (
          <>
            <li>
              <Link href="/search">Search</Link>
            </li>
            <li className="">
              {router.asPath.substring(8).replaceAll('%20', ' ')}
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
