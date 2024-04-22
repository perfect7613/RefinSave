// Header.js
import Image from 'next/image';
import React from 'react';

const Header = () => {
 

  return (
    <header className='w-screen py-2 flex justify-center bg-black'>
      <div className='pt-2 mr-4 cursor-pointer' >
        <a href='https://www.refinsave.com.au' target='_blank' rel='noopener noreferrer'>
          <Image src='/images/logo3.jpg' alt='Refine Save' width={210} height={50} />
        </a>
      </div>
    </header>
  );
};

export default Header;
