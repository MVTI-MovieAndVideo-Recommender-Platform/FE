import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaSignInAlt } from 'react-icons/fa';
//import styled from 'styled-components';
import Cookies from 'js-cookie';
import ModalLogin from './ModalLogin.js';
import logoLight from '../asset/img/logo2.png';
import logoDark from '../asset/img/logo2_dark.png';


const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = Cookies.get('theme');
    return savedMode === 'dark';
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', isDarkMode);
    Cookies.set('theme', theme, { expires: 365 });
  }, [isDarkMode]);

  const toggleColorMode = useCallback(() => {
    setIsDarkMode(prevMode => !prevMode);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevOpen => !prevOpen);
  };
//햄버거바 dropdown -> 외부영역클릭시 false
  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const MyIcon = ({ isDarkMode }) => (
   <svg
   className={`w-8 h-8 ${isDarkMode ? 'stroke-white' : 'stroke-black'}`}
   viewBox="0 0 24 24"
   xmlns="http://www.w3.org/2000/svg"
 >
   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
 </svg>
);

return (
   <header className="bg-white dark:bg-gray-900 text-black dark:text-white p-2 fixed top-0 w-full shadow-md z-50">
     <nav className="container mx-auto px-2 py-1 flex justify-between items-center relative">
       <div className="flex items-center justify-between w-full">
         <div className="flex items-center">
           <button onClick={toggleDropdown} className="lg:hidden p-1 rounded-full">
             <MyIcon isDarkMode={isDarkMode} />
           </button>
           <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
             <img src={isDarkMode ? logoDark : logoLight} alt="MVTI_logo" className="h-12 w-auto mx-5" />
           </Link>
         </div>
         <div className="hidden lg:flex items-center space-x-5">
           <Link to="/mvti_test" className="hover:text-blue-600" onClick={() => setIsDropdownOpen(false)}>MVTI추천</Link>
           <Link to="/mypage" className="hover:text-blue-600" onClick={() => setIsDropdownOpen(false)}>프로필</Link>
           <Link to="/search" className="hover:text-blue-600" onClick={() => setIsDropdownOpen(false)}>검색</Link>
         </div>
         <div className="flex items-center space-x-2">
           <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600" onClick={openModal}>
             <FaSignInAlt size={20} className={isDarkMode ? 'text-white' : 'text-black'} />
           </button>
           <ModalLogin isOpen={modalIsOpen} onClose={closeModal} />
           <button onClick={toggleColorMode} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600" aria-label="Toggle dark mode">
             {isDarkMode ? <FaSun size={20} /> : <FaMoon size={18} />}
           </button>
         </div>
       </div>
     </nav>
     {isDropdownOpen && (
       <div className="absolute bg-white dark:bg-gray-900 text-black dark:text-white mt-2 p-2 rounded shadow-lg z-10" ref={dropdownRef}>
         <Link to="/mvti_test" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>MVTI추천</Link>
         <Link to="/mypage" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>프로필</Link>
         <Link to="/search" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>검색</Link>
       </div>
     )}
   </header>
 );
};

export default Header;
