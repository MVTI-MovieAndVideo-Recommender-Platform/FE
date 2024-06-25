import axios from 'axios';
//fetchGenreID.js: 데이터를 불러오고, genre_ID 배열을 참조하여 각 미디어에 genre_ID를 추가하는 함수.
// media의 genre 값이 genre_ID의 name 배열 내에 존재할 때 해당 genre_id 값을 부여

//데이터 불러온 후, 같은 장르르 가진 데이터의 id 리스트 추출

////https://api.mvti.site/info/media/{media_id}
//const PosterBaseURL = "/https://api.mvti.site/poster/"; //{id}/{poser_count}
//const BannerBaseURL = "/https://api.mvti.site/banner/"; //{id}/{_count}
//const thunbnailBaseURL = "/https://api.mvti.site/thunbnail/"; //{id}/{_count}

 
//export { imageBaBaseURLseURL, BaseURL,PosterBaseURL, BannerBaseURL, thunbnailBaseURL, fetchDataFromServer };

const genre_ID = [
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
// fetchDataFromServer: URL에서 데이터 호출, callback 함수로 전달
const fetchDataFromServer = async function(url, callback) {
   try {
      const response = await axios.get(url);
      const data = response.data;
      callback(data);
   } catch (error) {
      console.error('Error fetching data (genreID):', error);
   }
};

// fetchGenreID: fetchDataFromServer -> 각 media 객체에 genre_ID를 부여!
const fetchGenreID = async (callback) => {
   console.log("test");
   //const _url = 'https://api.mvti.site/info/${id}';
   const url = 'https://api.mvti.site/info/id'; // URL 인코딩 및 파라미터 확인
   await fetchDataFromServer(url, (data) => {
      const processedData = data.results.map(media => {
         if (media.genre && media.genre.length > 0) {
            const genre_IDs = media.genre.map(genreName => {
               const foundGenre = genre_ID.find(g => g.name.includes(genreName));
               return foundGenre ? foundGenre.id : null;
            }).filter(id => id !== null); // null 값을 제외함

            return {
               ...media,
               genre_ID: genre_IDs
            };
         }
         return media;
      });
      callback(processedData);
   });
};

export { fetchDataFromServer, fetchGenreID, genre_ID };



//R server
//검색, 검사시 추천리스트
//:https://api.mvti.site/info/docs#/default/test__get
//https://api.mvti.site/info/docs#/default/get_search_search_get
//전체 컨텐츠
//:https://api.mvti.site/info/search?anything=string&isfilter=false&contentype=0&page=1&page_size=100

//info/
//mvti.site/info/media/1 (숫자)
//mvti.site/banner/1/1
//mvti.site/poster/1/1
//mvti.site/thunbnail/1/1
//https://api.mvti.site/member/docs
//https://api.mvti.site/info/docs
//https://api.mvti.site/review/docs
//https://mvti.site/banner/(id)/(count)
//api url:
//https://api.mvti.site/info/search?anything=string&isfilter=false&contentype=0&page=1&page_size=100
//https://api.mvti.site/info/search?anything=%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8&isfilter=false&contentype=0&page=1&page_size=100

//고유장르 정의
//미디어 DB - type ENUM('movie', 'series')
//CREATE TABLE media (
//   id INT UNSIGNED NOT NULL PRIMARY KEY,
//   type ENUM('movie', 'series') NOT NULL,
//   title VARCHAR(255) NOT NULL,
//   runtime SMALLINT UNSIGNED NOT NULL,
//   release_date DATE NOT NULL,
//   certification VARCHAR(255) DEFAULT NULL,
//   genre VARCHAR(255) NOT NULL,
//   origin_country VARCHAR(255) NOT NULL,
//   overview VARCHAR(2000) NOT NULL,
//   director VARCHAR(255) DEFAULT NULL,
//   actor VARCHAR(1000) DEFAULT NULL,
//   platform VARCHAR(255) NOT NULL,
//   rating_value DECIMAL(2, 1) UNSIGNED NOT NULL CHECK (
//       rating >= 0
//       AND rating <= 5
//   ),
//   rating_count INT UNSIGNED NOT NULL,
//   posterurl_count TINYINT UNSIGNED DEFAULT 0,
//   backdropurl_count TINYINT UNSIGNED DEFAULT 0,
//   posterurl VARCHAR(1000) DEFAULT NULL,
//   backdropurl VARCHAR(1000) DEFAULT NULL
//);