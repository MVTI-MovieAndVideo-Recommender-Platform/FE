"use strict";
//전체 미디어 호출
const BaseURL = "https://api.mvti.site/info/search";


 
//리드서버 api -> 
//[GET] => https://api.mvti.site/info/search?page_size=100


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