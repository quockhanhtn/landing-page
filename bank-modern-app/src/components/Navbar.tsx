'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { close, logo, menu } from '@/assets';
import * as constants from '@/constants';

const Navbar = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <Image src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {constants.navLinks.map(
          (nav: { id: string; title: string }, index: number) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === constants.navLinks.length - 1 ? 'mr-0' : 'mr-10'
              }`}>
              <Link href={`#${nav.id}`}>{nav.title}</Link>
            </li>
          )
        )}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Image
          src={mobileToggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px]  object-contain'
          onClick={() => setMobileToggle((prev) => !prev)}
        />

        <div
          className={`${
            mobileToggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {constants.navLinks.map(
              (nav: { id: string; title: string }, index: number) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                    index === constants.navLinks.length - 1 ? 'mb-0' : 'mb-4'
                  }`}>
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
