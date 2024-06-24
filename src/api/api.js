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
 
//----------------------------------------------------------------------------------------------------------------------------------------
////https://mvti.site/poster/11/1
//info/
//mvti.site/info/media/1 (숫자) : 진행중
//mvti.site/banner/1/1
//mvti.site/poster/1/1
//mvti.site/thunbnail/1/1

//5. Rapi.js와 https://api.mvti.site/info/search?id=${id} 차이점
//https://api.mvti.site/info/search?id=${id}: 특정 id에 해당하는 데이터를 가져오기 위해 사용됩니다.
//https://api.mvti.site/info/search: 전체 미디어 데이터를 가져오기 위해 사용됩니다.
//Rapi.js가 현재 프로젝트에서 사용되지 않는다면 삭제하거나 수정할 필요가 있습니다.
//
//6. 결론
//이러한 수정 사항을 반영하면 에러를 해결하고 코드의 중복을 줄일 수 있습니다. Card.js는 기본 매개변수를 사용하고, MediaCardSimple.js는 API에서 데이터를 가져와 Card.js에 전달합니다. HomePage.js는 수정된 MediaCardSimple을 사용하여 미디어 데이터를 렌더링합니다.

 
//리드서버 api -> 
//[GET] => https://api.mvti.site/info/search?page_size=100


//리뷰 관련 api -> 모든 엔드 포인트에서 헤더에 jwt토큰 값 넣어서 보내야 해요
//- 별점을 주고 수정하고 삭제하는 엔드포인트 -
//[POST] => https://api.mvti.site/review/rating?media_id="별점을 남길 media_id"&?rating="별점" 
//[PATCH] => https://api.mvti.site/review/editrating?media_id="별점을 남길 media_id"&?rating="별점" 
//[DELETE] => https://api.mvti.site/review/deleterating?media_id="별점을 남길 media_id" 
//
//- 선호하는 영화를 추가하고 삭제하는 엔드포인트 -
//[POST] => https://api.mvti.site/review/preference?media_id="선호하는 media_id"
//[DELETE] => https://api.mvti.site/review/deletepreference?media_id="선호하는 media_id" 
//
//---------------------------------------------------------------------------------------------------------------------------------------- 




//-통합 검색 -
//
//[GET] => https://api.mvti.site/info/search?page_size=100 
//
//anything 파라미터애는 검색하고 싶은 키워드를 아무거나 입력 하면 돼용
//
//필터링 검색 isfilter = True 설정 해야해용
//[start_date,end_date를 제외한 모든 params를 배열로 검색해도 돼용]
//titles 제목 검색
//genres 특정 장르가 있는 미디어 조회
//keywords 줄거리에서 특정 키워드가 존재하는 미디어 조회
//directors 특정 감독이 제작한 미디어 조회
//actors 특정 배우가 출연한 미디어 조회
//platforms 특정 ott에서 제공되는 미디어 조회
//countries 특정 국가 에서 만든 미디어 조회
//
//start_date 지정한 날짜부터 개봉된 미디어 조회
//end_date 지정한 날짜까지 개봉된 미디어 조회
//
//
//-컨텐츠 조회-
//[GET] => https://api.mvti.site/info/media/{media_id}
//
//-검사 페이지에 추천할 미디어 목록-
//처음 검사할때
//[GET] => https://api.mvti.site/info/rank_random_20
//미디어를 새로고침할 때
//[GET] => https://api.mvti.site/info/re_rank_random_20?previousmedia="미디어 id" -> 이전에 추천했던 미디어들을 전부 보내줘야해요
//