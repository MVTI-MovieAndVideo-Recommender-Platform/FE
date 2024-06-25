import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaSignInAlt } from 'react-icons/fa';
import Cookies from 'js-cookie';
//
import ModalLogin from './ModalLogin.js';
import logoLight from '../asset/img/logo2.png';
import logoDark from '../asset/img/logo2_dark.png';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = Cookies.get('theme');
    return savedMode === 'dark';
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
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

//  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <header className="bg-white dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-60 text-black dark:text-white pt-2 p-1 fixed top-0 w-full shadow-md z-50">
      <nav className="container mx-auto px-2 py-1 flex items-center justify-between">
        <div className="flex items-center">
          <button onClick={toggleDropdown} className="lg:hidden p-1 rounded-full">
            <svg className="w-8 h-8" fill="none" stroke={isDarkMode ? 'white' : 'black'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
    
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
            <img src={isDarkMode ? logoDark : logoLight} alt="MVTI_logo" className="h-14 w-auto px-3" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-5">
          <Link to="/mvti_test" className="hover:text-blue-600 hover:underline font-semibold">MVTI추천</Link>
          <Link to="/mypage" className="hover:text-blue-600 hover:underline font-semibold" onClick={openModal}>프로필</Link>
          <Link to="/search" className="hover:text-blue-600 hover:underline font-semibold">검색</Link>
        </div>
        <div className="flex items-center space-x-2">
          <div>
            <button className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600" onClick={openModal}>
              <FaSignInAlt size={20} className={isDarkMode ? 'text-white' : 'text-black'} />
            </button>
            <ModalLogin isOpen={modalIsOpen} onClose={closeModal} />
          </div>
          <button onClick={toggleColorMode} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600" aria-label="Toggle dark mode">
            {isDarkMode ? <FaSun size={20} className="text-white" /> : <FaMoon size={18} className="text-black" />}
          </button>
        </div>
      </nav>
      {isDropdownOpen && (
        <div ref={dropdownRef} className="absolute bg-white dark:bg-gray-800 text-black dark:text-white mt-2 rounded-md shadow-lg w-48 z-10">
          <Link to="/mvti_test" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>MVTI추천</Link>
          <Link to="/mypage" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>프로필</Link>
          <Link to="/search" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700" onClick={() => setIsDropdownOpen(false)}>검색</Link>
        </div>
      )}
    </header>
  );
};

export default Header;


//다크모드 -> 헤더 유리+화이트로고, 컴포넌트들도!


//<Link to="/mypage" className="hover:text-blue-600 hover:underline">프로필</Link>