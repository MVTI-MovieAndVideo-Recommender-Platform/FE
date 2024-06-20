import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../asset/img/MVTI_logo.png";

const InternalComponent = () => {
  return (
    <div className="dropdown-menu absolute bg-white dark:bg-gray-800 mt-2 p-2 rounded shadow-lg">
      <Link to="/mvti_test"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white">
        mvti_test
      </Link>
      <Link to="/genre"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white">
        genre
      </Link>
      <Link to="/login"
        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white">
        로그인
      </Link>
    </div>
  );
};

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleColorMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-800 text-black dark:text-white p-3 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center py-2 px-4 md:px-40 border-b border-gray-100 dark:border-gray-700">
        <div className="relative">
          <label className="btn btn-circle swap swap-rotate">
            <input
              type="checkbox"
              checked={isDropdownOpen}
              onChange={toggleDropdown}
            />
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          {isDropdownOpen && <InternalComponent />}
        </div>
        <div className="flex-1">
          <Link to="/">
            <img src={logo} alt="MVTI_logo" className="btn btn-ghost hover:underline" />
          </Link>
        </div>
        <div className="flex-none">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleColorMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

      //<button className="btn btn-square btn-ghost">
      //  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
      //    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
      //    </path>
      //  </svg>
      //</button>


//<header className="bg-white dark:bg-gray-800 text-black dark:text-white p-3 fixed top-0 w-full z-50">
//<div className="flex justify-between items-center py-2 px:4 md:px-40 border-b border-gray-100 dark:border-gray-700">
//   <Link to="/">
//      <img src={logo} alt="MVTI_logo" className="h-10"/>
//   </Link>
//      <nav className="App-header-navbar flex space-x-4">
//         <Link to="/"  className="hover:underline">HomePage</Link>
//         <Link to="/mypage" className="hover:underline">MyPage</Link>
//         <Link to="/content/:id"  className="hover:underline">DetailPage</Link>
//         < Link to="/login"  className="hover:underline">SocialLogin</Link>
//         <Link to="/mvti_result"  className="hover:underline">MVTIResultPage</Link>
//         <Link to="/mvti_test"  className="hover:underline">MVTITestPage</Link>
//      </nav>
//      <div className="flex items-center space-x-4">
//        <button
//        onClick={toggleColorMode}
//        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
//        aria-label="Toggle dark mode">
//          {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//        </button>
//      </div>   
//</div>
//</header>