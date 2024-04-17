import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full text-white text-lg py-4 px-4 md:px-16 bg-[rgba(162,175,255,0.1)] backdrop-blur-[8px] border-b-[0.5px] border-[rgba(255,255,255,0.13)] z-50">
    <div className='w-full flex'>
    <div className='flex-1 flex items-center justify-start'>
      <div>
      <span className='px-2 border-r-[2px] text-[1.4rem] border-[rgba(255,255,255,0.2)] text-blue-500 font-extrabold'>Calendly</span>
      <span className='px-2 text-slate-300 font-light'>Help Center</span>
      </div>
    </div>
    <div className='hidden md:inline-flex flex-2 flex-1 items-center justify-end text-[0.9rem] *:px-5 md:hover:*:text-blue-500'>
      <a>Developers</a>
      <a>Report Abuse</a>
      <a className='border-r-[1px] border-[rgba(255,255,255,0.2)]'>Contact Us</a>
      <a>Log In</a>
      <a>Sign Up</a>
    </div>
    <div onClick={toggleNavbar} className='md:hidden'><FontAwesomeIcon className='text-[1.5rem]' icon={isOpen?faXmark:faBars}/></div>
    </div>
      {isOpen?
      <div className='flex flex-col mt-5 px-2 *:py-3 md:hidden'>
      <a>Developers</a>
      <a>Report Abuse</a>
      <a>Contact Us</a>
      <a>Log In</a>
      <a>Sign Up</a>
      </div>
      :<></>}
    </nav>
  );
};

export default Navbar;
