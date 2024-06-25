"use strict";
//전체 미디어 호출
const BaseURL = "https://api.mvti.site/info/media/";
//https://api.mvti.site/info/media/{media_id}
const PosterBaseURL = "/https://api.mvti.site/poster/"; //{id}/{poser_count}
const BannerBaseURL = "/https://api.mvti.site/banner/"; //{id}/{_count}
const thunbnailBaseURL = "/https://api.mvti.site/thunbnail/"; //{id}/{_count}
const fetchDataFromServer = function (url, callback, optionalParam) {
   fetch(url)
     .then((response) => response.json())
     .then((data) => callback(data, optionalParam));
 };
 
 export { imageBaBaseURLseURL, BaseURL,PosterBaseURL, BannerBaseURL, thunbnailBaseURL, fetchDataFromServer };
 //완