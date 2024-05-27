"use strict";
import React, { useState, useEffect } from "react";
import "../App.css";
import { api_key, fetchDataFromServer } from "./api";
import { addEventOnElements } from "./Global";

function SideBar() {
  const [genreList, setGenreList] = useState({});

  useEffect(() => {
    fetchDataFromServer(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
      function({ genres }) {
        const genreMap = {};
        for (const { id, name } of genres) {
          genreMap[id] = name;
        }
        setGenreList(genreMap);
      }
    );
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
  }, [genreList]); // genreList가 변경될 때마다 이벤트를 추가

  return (
    <aside className="App-sidebar" sidebar>
      <nav>
        <div className="sidebar-inner">
          <div className="sidebar-list">
            <p className="title">장르</p>
            {Object.entries(genreList).map(([genreId, genreName]) => (
              <a
                key={genreId}
                className="sidebar-link"
                href="./MovieList.html"
                menu-close=""
                onClick={() =>
                  window.getMovieList(`with_genres=${genreId}`, genreName)
                }
              >
                {genreName}
              </a>
            ))}
          </div>
          <div className="sidebar-footer">
            <a
              href="https://github.com/MVTI-MovieAndVideo-Recommender-Platform/FE.git"
              alt="MVTI가 궁금해요!"
            >
              MVTI_Github
            </a>
            <br />
            <img
              src="../src/asset/img/icon01.jpg"
              alt="MVTI Logo"
              width="130"
              height="17"
            />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default SideBar;