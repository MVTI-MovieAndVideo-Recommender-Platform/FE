"use strict";
// 임시 API key
const api_key = "829a43a98259bc44cae297489c7e3bba";
const imageBaseURL = "https://image.tmdb.org/t/p/";

const fetchDataFromServer = function(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error('Error fetching data:', error));
};

const fetchGenres = (callback) => {
  fetchDataFromServer(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
    ({ genres }) => {
      const genreMap = {};
      genres.forEach(({ id, name }) => {
        genreMap[id] = name;
      });
      callback(genreMap);
    }
  );
};

export { imageBaseURL, api_key, fetchDataFromServer, fetchGenres };