import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaSignInAlt } from 'react-icons/fa';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import ModalLogin from './ModalLogin.js';
import logoLight from '../asset/img/logo2.png';
import logoDark from '../asset/img/logo2_dark.png';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    .desktop-nav {
      display: none;
    }
    .mobile-nav {
      display: flex;
    }
  }

  @media (min-width: 1025px) {
    .desktop-nav {
      display: flex;
    }
    .mobile-nav {
      display: none;
    }
  }
`;

const InternalComponent = styled.div`
  position: absolute;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#2D3748' : 'white')};
  color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const InternalLink = styled(Link)`
  display: block;
  padding: 8px 16px;
  &:hover {
    background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#4A5568' : '#f1f1f1')};
  }
  color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
`;

const Logo = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
  min-width: 120px;
  min-height: 50px;
  max-width: 240px;
  max-height: 200px;
`;

const SearchInput = styled.input`
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
  flex-grow: 1;
  max-width: 200px;
  margin-left: 0.5rem;
`;

const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
  background-color: 'transparent';
  padding: 0.25rem;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  &:hover {
    background-color: 'transparent';
  }
`;

const StyledSVG = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: none;
  stroke: ${({ $isDarkMode }) => ($isDarkMode ? 'white' : 'black')};
`;

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

  const MyIcon = ({ $isDarkMode }) => (
    <StyledSVG $isDarkMode={$isDarkMode} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </StyledSVG>
  );


  return (
    <header className="bg-white dark:bg-gray-800 text-black dark:text-white p-2 fixed top-0 w-full shadow-md z-50">
      <Nav className="container mx-auto px-2 py-1">
        <HeaderContainer>
          <div className="flex items-center">
            <LoginButton onClick={toggleDropdown} >
              <MyIcon $isDarkMode={isDarkMode} />
            </LoginButton>
            <Link to="/" className="text-2x1 font-bold text-gray-800 dark:text-white">
              <img src={isDarkMode ? logoDark : logoLight} alt="MVTI_logo" className="h-12 w-auto mx-5" />
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-5 desktop-nav">
            <Link to="/mvti_test" className="hover:text-blue-600" onClick={() => setIsDropdownOpen(false)}>MVTI추천</Link>
            <Link to="/mypage" className="hover:text-blue-600" onClick={() => setIsDropdownOpen(false)}>프로필</Link>
            <Link to="/search" className="hover:text-blue-600" onClick={() => setIsDropdownOpen(false)}>검색</Link>
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <LoginButton to="#" $isDarkMode={isDarkMode} onClick={openModal}>
                <FaSignInAlt size={20} />
              </LoginButton>
              <ModalLogin isOpen={modalIsOpen} onClose={closeModal} />
            </div>
            <button onClick={toggleColorMode} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600" aria-label="Toggle dark mode">
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={18} />}
            </button>
          </div>
        </HeaderContainer>
      </Nav>
      {isDropdownOpen && (
        <InternalComponent $isDarkMode={isDarkMode} ref={dropdownRef}>
          <InternalLink to="/mvti_test" $isDarkMode={isDarkMode} onClick={() => setIsDropdownOpen(false)}>MVTI추천</InternalLink>
          <InternalLink to="/mypage" $isDarkMode={isDarkMode} onClick={() => setIsDropdownOpen(false)}>프로필</InternalLink>
          <InternalLink to="/search" $isDarkMode={isDarkMode} onClick={() => setIsDropdownOpen(false)}>검색</InternalLink>
        </InternalComponent>
      )}
    </header>
  );
};

export default Header;
