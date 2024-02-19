import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
            <div className='container p-12 flex justify-between'>
            <Image
              src="./logo.png"
              alt="logo"
              className=" rounded-full top-1/2 left-1/2"
              width={30}
              height={30}
            ></Image>
                <p  className='text-slate-600'> All rights reserved.</p>
            </div>
    </footer>
  )
}

export default Footer