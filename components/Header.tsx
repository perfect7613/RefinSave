import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='w-screen py-2 flex justify-center bg-black'>
        <div className='pt-2 mr-4'>
            <Image src='/images/Logo.png' alt='Refine Save' width={210} height={50} />
        </div>
    </header>
  )
}

export default Header