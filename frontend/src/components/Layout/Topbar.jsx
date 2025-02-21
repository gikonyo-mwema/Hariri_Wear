import React from 'react'
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';

const Topbar = () => {
    return (
        <div className="bg-[#ea2e0e] text-white">
            <div className='container mx-auto flex justify-between items-center py-3 px-4'>
                <div className='hidden md:flex items-center text-white'>
                    <a href='#' className='hover:text-gray-300'>
                        <TbBrandMeta className="h-5 w-5" />
                    </a>
                    <a href='#' className='hover:text-gray-300'>
                        <IoLogoInstagram className="h-5 w-5" />
                    </a>
                    <a href='#' className='hover:text-gray-300'>
                        <RiTwitterXLine className="h-5 w-5" />
                    </a>
                </div>
                <div className='text-sm text-center flex-grow'>
                    <span>Where Style Meets Culture – Discover Your Next Look.</span>
                </div>
                <div className="text-sm hidden md:block">
                    <a href="tel:0798992279" className="hover:text-gray-300">
                        +254 798 992 279
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar;