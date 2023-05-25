import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Logo from './Logo';
import { Search } from '../Search/Search';
import Breadcrumbs from '../Breadcrumbs';
import Credits from '../Credits';

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
      <nav className="relative flex items-start justify-center containerLayout">
        <Search />
        <Link className="mt-6 md:mt-4" href="/">
          <Logo />
        </Link>
        <Credits />
        <Breadcrumbs />
      </nav>
    </header>
  );
};
