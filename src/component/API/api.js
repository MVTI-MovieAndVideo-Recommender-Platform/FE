"use strict";

//0609)async, await 사용->가독성

const imageBaseURL = "";


const fetchDataFromServer = async function(url, callback) {
   try{
      const response = await fetch(url);
      const data = await response.json();
      callback(data);
   }catch(error){
      console.error('Error fetch Data:',error);
      }
   };

const fetchGenres = async(callback) => {
  await fetchDataFromServer(
    'https://pj2ijfkkmb6q7avxdo6fkvhekq0kzmqs.lambda-url.ap-northeast-2.on.aws/search/genre?genres=%EB%93%9C%EB%9D%BC%EB%A7%88&genres=sf&contentype=1&page=1&page_size=100',
    ({ genres }) => {
      const genreMap = {};
      genres.forEach(({ id, name }) => {
        genreMap[id] = name;
      });
      callback(genreMap);
    }
  );
};
export {imageBaseURL, fetchDataFromServer, fetchGenres };

//"use strict";
//// 임시 API key
//const api_key = "829a43a98259bc44cae297489c7e3bba";
//const imageBaseURL = "https://image.tmdb.org/t/p/";
//
//const fetchDataFromServer = function(url, callback) {
//  fetch(url)
//    .then((response) => response.json())
//    .then((data) => callback(data))
//    .catch((error) => console.error('Error fetching data:', error));
//};
//
//const fetchGenres = (callback) => {
//  fetchDataFromServer(
//    `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
//    ({ genres }) => {
//      const genreMap = {};
//      genres.forEach(({ id, name }) => {
//        genreMap[id] = name;
//      });
//      callback(genreMap);
//    }
//  );
//};
//
//export { imageBaseURL, api_key, fetchDataFromServer, fetchGenres };