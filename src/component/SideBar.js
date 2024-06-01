"use strict";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import {fetchGenres} from "./api";
import { addEventOnElements } from "./Global";

export function SideBar() {
   const [genreList, setGenreList] = useState({});
 
   useEffect(() => {
     fetchGenres(setGenreList);
   }, []);
 
   useEffect(() => {
     const sidebar = document.querySelector("[sidebar]");
     if (sidebar) {
       const sidebarBtn = document.querySelector("[menu-btn]");
       const sidebarTogglers = document.querySelectorAll("[menu-toggler]");
       const sidebarClose = document.querySelectorAll("[menu-close]");
       const overlay = document.querySelector("[overlay]");
 
       addEventOnElements(sidebarTogglers, "click", function () {
         sidebar.classList.toggle("active");
         sidebarBtn.classList.toggle("active");
         overlay.classList.toggle("active");
       });
 
       addEventOnElements(sidebarClose, "click", function () {
         sidebar.classList.remove("active");
         sidebarBtn.classList.remove("active");
         overlay.classList.remove("active");
       });
     }
   }, [genreList]);
 
   return (
     <aside className="App-sidebar" sidebar>
       <nav>
         <div className="sidebar-inner">
           <div className="sidebar-list">
             <p className="title">장르</p>
             {Object.entries(genreList).map(([genreId, genreName]) => (
               <Link
                 key={genreId}
                 to={`/genre/${genreId}`}
                 className="sidebar-link"
               >
                 {genreName}
               </Link>
             ))}
           </div>
           <div className="sidebar-footer">
             <a
               href="https://github.com/MVTI-MovieAndVideo-Recommender-Platform/FE.git"
               alt="MVTI가 궁금해요!"
             >
               MVTI_Github 바로가기
             </a>
             <br />
             <img
               src="../asset/img/logo.svg"
               alt="MVTI Logo"
               width="30"
               height="30"
             />
           </div>
         </div>
       </nav>
     </aside>
   );
 }
 
 export default SideBar;