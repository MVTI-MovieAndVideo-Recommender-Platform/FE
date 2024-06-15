import React,{useEffect, useState} from "react";
//import "../App.css";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../asset/img/MVTI_logo.png"
//import { RiRobot2Line } from "react-icons/ri";
    //react icon + tailwindcss + daisyUI

const Header = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
   <header className="App-header bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="flex justify-between items-center py-5 px-40 border-b border-gray-200 dark:border-gray-700">
         <Link to="/">
            <img src={logo} alt="MVTI_logo" className="h-20"/>
         </Link>
            <nav className="App-header-navbar flex space-x-4">
               <Link to="/"  className="hover:underline">HomePage</Link>
               <Link to="/content/:id"  className="hover:underline">DetailPage</Link>
               < Link to="/Login"  className="hover:underline">LogInModal</Link>
            
               <Link to="/MVTIResultPage"  className="hover:underline">MVTIResultPage</Link>
               <Link to="/MVTITestPage"  className="hover:underline">MVTITestPage</Link>
            </nav>
            <div className="flex items-center space-x-2">
          <button
            onClick={toggleColorMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
         </div>   
      </div>
   </header>
   );
};

export default Header;

//{!user && <Button text="Login" onClick={login}></Button>}
//{user && <Button text="Logout" onClick={logout}></Button>}

//import {
//  Avatar,
//  Box,
//  Button,
//  IconButton,
//  LightMode,
//  Menu,
//  MenuButton,
//  MenuList,
//  Stack,
//  ToastId,
//  useColorMode,
//} from "@chakra-ui/react";

//import LoginModal from "./LoginModal";
//import SignUpModal from "./SignUpModal";
//import useUser from "../lib/useUser";
//import { logOut } from "../api";
//import { useMutation, useQueryClient } from "@tanstack/react-query";
//import { useRef } from "react";
//import user from "./User.js";
//로고- 홈으로 이동
//검색창- 
//로그인/회원가입- 해당 모달 이동