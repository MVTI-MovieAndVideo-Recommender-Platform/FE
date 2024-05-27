"use strict";
//임시API key
const api_key = "829a43a98259bc44cae297489c7e3bba";
const imageBaseURL = "https://image.tmdb.org/t/p/";

const fetchDataFromServer = function(url, callback, optionalParam)
{
   fetch(url)
   .then((response) => response.json())
   .then((data) => callback(data.optionalParam));
};
export {imageBaseURL, api_key,fetchDataFromServer};