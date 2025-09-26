'use client';

import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';

import { Container } from '@/components/common';

export const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-1/2 z-50 mx-auto w-full -translate-x-1/2 transition-colors duration-700 ease-in-out',
        {
          'bg-transparent': !scrolled,
          'bg-white/50 shadow-md backdrop-blur-[22px]': scrolled,
        }
      )}
      role="navigation"
      aria-label="Main Navigation"
    >
      <Container className="flex justify-between items-center px-4 py-2 md:pl-8 md:pr-11.5 xl:py-8 xl:pr-17 xl:pl-18">
        <p className="font-JomolHari text-2xl/6 md:text-3xl/6.5 xl:text-[40px]/10 text-black">
          <span>FODO</span>
        </p>
        <button className="font-inter rounded-full bg-black p-1.5 md:py-3 md:px-4 xl:px-11 xl:py-4.5 text-xs/3 xl:text-base/4 font-bold text-white uppercase transition-colors duration-500 ease-in-out 
        hover:bg-[#EE4230]">
          <span>MENU</span>
        </button>
      </Container>
    </nav>
  );
};
