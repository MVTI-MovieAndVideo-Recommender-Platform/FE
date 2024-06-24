import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaSignInAlt } from 'react-icons/fa';
import Cookies from 'js-cookie';
import logoLight from '../asset/img/logo2.png';
import logoDark from '../asset/img/logo2_dark.png';
import ModalLogin from './ModalLogin.js';

const Header = () => {
   const [isDarkMode, setIsDarkMode] = useState(() => {
   const savedMode = Cookies.get('theme');
      return savedMode === 'dark';
   });
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const dropdownRef = useRef(null);

   useEffect(() => {
      const theme = isDarkMode ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', isDarkMode);
      Cookies.set('theme', theme, { expires: 365 });
   }, [isDarkMode]);

   const toggleColorMode = () => {
     setIsDarkMode(!isDarkMode);
   };

   const toggleDropdown = () => {
       setIsDropdownOpen(!isDropdownOpen);
   };
   useEffect(() => {
   const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      }
   };

   if (isDropdownOpen) {
       document.addEventListener('mousedown', handleClickOutside);
   } else {
      document.removeEventListener('mousedown', handleClickOutside);
   }

   return () => {
      document.removeEventListener('mousedown', handleClickOutside);
   };
    }, [isDropdownOpen]);


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

  //로고 다크모드
 const logo = isDarkMode ? logoDark : logoLight;

const [modalIsOpen, setModalIsOpen] = useState(false);
 
const openModal = () => setModalIsOpen(true);
const closeModal = () => setModalIsOpen(false);

  return (
    <header className="bg-white dark:bg-black text-black dark:text-white p-2 fixed top-0 w-full shadow-md z-10">
      <nav className="container mx-auto px-2 py-1 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleDropdown} className="text-black dark:text-white focus:outline-none lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link to="/" className="text-2xl font-bold text-black dark:text-white flex items-center">
            <img src={logo} alt="MVTI_logo" className="h-16 mx-5" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-5 ">
          <Link to="/category" className="hover:text-blue-600">카테고리</Link>
          <Link to="/mvti_test" className="hover:text-blue-600">MVTI추천</Link>
          <Link to="/mypage" className="hover:text-blue-600">프로필</Link>
          <Link to="/search" className="hover:text-blue-600">검색</Link>
        </div>
        {/*모달 로그인 구현!
                    <Link to="/login" className="flex items-center justify-center bg-gray-700 text-white p-2 rounded-md hover:bg-blue-600">
               <FaSignInAlt size={18} />
            </Link>
        */}
         <div className="flex items-center space-x-2">
            <div>
               <button onClick={openModal}>
                  <FaSignInAlt size={18} />
               </button>
                  <ModalLogin isOpen={modalIsOpen} onClose={closeModal} />
            </div>
          <input type="search" placeholder="Search" className="border border-gray-300 rounded-md p-2" />
          <button onClick={toggleColorMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600" aria-label="Toggle dark mode">
            {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
         </div>
      </nav>
         {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute top-full left-0 mt-2 w-48 bg-gray-200 dark:bg-gray-700 shadow-lg rounded-md p-2 lg:hidden">
            <Link to="/category" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600" 
             onClick={() => setIsDropdownOpen(false)}>카테고리</Link>
            <Link to="/mvti_test" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600" 
             onClick={() => setIsDropdownOpen(false)}>MVTI추천</Link>
            <Link to="/mypage" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600" 
             onClick={() => setIsDropdownOpen(false)}>프로필</Link>
             <Link to="/search" className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600" 
             onClick={() => setIsDropdownOpen(false)}>검색</Link>
            </div>
         )}
    </header>
  );
};


export default Header;
