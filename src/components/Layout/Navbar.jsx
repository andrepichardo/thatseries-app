import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';
import { Search } from '../Search/Search';
import Image from 'next/image';
import LogoEpisoDate from '../../../public/logo-episodate.svg';
import Breadcrumbs from '../Breadcrumbs';

export const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    setNavBg('#1f2937');
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= window.innerHeight * 0.02) {
        setShadow(true);
        setNavBg('#1f2937');
      } else {
        setShadow(false);
        setNavBg('#1f2937');
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, [router]);

  return (
    <header
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-[105px] shadow-xl z-[100]'
          : 'fixed w-full h-[105px] z-[100]'
      }
    >
      <nav className="flex justify-center items-start containerLayout relative">
        <Breadcrumbs />
        <Link className="mt-6 md:mt-4" href="/">
          <Logo />
        </Link>
        <Search />
        <div className="flex flex-col items-end absolute right-6 md:right-8 2xl:right-10 top-5">
          <span className="text-[10px] md:text-sm">Powered by</span>
          <Image
            src={LogoEpisoDate}
            width="0"
            height="0"
            alt="Logo EpisoDate"
            className="w-12 md:w-16"
          />
        </div>
      </nav>
    </header>
  );
};
