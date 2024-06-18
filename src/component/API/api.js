"use strict";
const axios = require('axios');

//https://api.mvti.site/member/docs //
//https://api.mvti.site/info/docs
//https://api.mvti.site/review/docs

//api url:
//https://api.mvti.site/info/search?anything=string&isfilter=false&contentype=0&page=1&page_size=100

//고유장르 정의
const genres = [
   { id: 1, name: ['코미디', '시트콤' ] },
   { id: 2, name: ['드라마'] },
   { id: 3, name: ['애니메이션'] },
   { id: 4, name: ['로맨스'] },
   { id: 5, name: ['로맨틱 코미디'] },
   { id: 6, name: ['액션', 'Action & Adventure' ] },
   { id: 7, name: ['공포' ,'스릴러'] },
   { id: 8, name: ['TV드라마'] },
   { id: 9, name: ['미스터리'] },
   { id: 10, name: ['범죄'] },
   { id: 11, name: ['뮤지컬'] },
   { id: 12, name: ['모험' ,'재난' ] },
   { id: 13, name: ['가족'] },
   { id: 14, name: ['시사교양' ] },
   { id: 15, name: ['서부', '서부극' ] },
   { id: 16, name: ['TV 영화'] },
   { id: 17, name: ['예능' ] },
   { id: 18, name: ['단편' ] },
   { id: 19, name: ['역사','전기', '시대극' ] },
   { id: 20, name: ['Kids', '키즈'] },
   { id: 21, name: ["Western", "Drama"] },
   { id: 22, name: ['다큐멘터리'] },
   { id: 23, name: ['판타지' ,'SF', 'Sci-Fi & Fantasy'] }, 
   { id: 24, name: ['음악','Talk'] },
   { id: 25, name: ['News'] },
   { id: 26, name: ['틴에이저'] },
   { id: 27, name: ['Reality'] },
   { id: 28, name: [ '공연실황' ] },
   { id: 29, name: ['GL', 'BL'] },
   { id: 30, name: ['일상'] },
   { id: 31, name: ['Soap'] },
   { id: 32, name: ['전쟁', 'War & Politics'] },
   { id: 33, name: ['스포츠'] },
];

const fetchDataFromServer = async function(url, callback) {
   try{
      const response = await axios.get(url);
      const data = response.data;
      callback(data);
      }catch(error){
      console.error('Error fetch Data:',error);
      }
   };
// 새로운 fetch 함수 추가
const fetchContentData = async (callback) => {
   const url = 'https://api.mvti.site/info/search?countries=%ED%95%9C%EA%B5%AD&countries=%EB%AF%B8%EA%B5%AD&isfilter=true&contentype=0&page=1';
   await fetchDataFromServer(url, callback);
 };

export {fetchDataFromServer, fetchContentData, genres };
//axios->module
//(회원)const api_key =  "81a8ac8cb265ba4a316d3b459a700e3b";
//https://api.mvti.site/info/search?anything=%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8&isfilter=false&contentype=0&page=1&page_size=100