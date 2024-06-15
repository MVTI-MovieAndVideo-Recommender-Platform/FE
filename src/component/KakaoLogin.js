//import axios from "axios";//카카오 로그인 요청처리용 함수 정의
 
const Rest_api_key = '2eae58859131ba2e2305907af81ba954';
const redirectURI = encodeURIComponent('https://mvti.site/login/auth'); 
//const state = 'hLiDdL2uhPtsftcU'; //csrf방지 -> 랜덤 값 사용하기


export const requestKakaoLogin = () => {
//user K로그인 페이지로 리다이렉트->카카오 로그인 인증요청
// 카카오 로그인 URL 생성
const kakaoLoginURL = 
`https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirectURI}&response_type=code`;

   window.location.href = kakaoLoginURL;
} 





//로그인 버튼_형식 체크 및 css 적용
//mvti 앱 키: mvti 앱 키: rest API : 81a8ac8cb265ba4a316d3b459a700e3b / js : 581c81d0517770156f4dbc0137020417
//mvti 시크릿 키 : 4EaUbuFfvgH6KqQ30jfcSAMuiMjzb0oP
//Redirect URI:http://localhost:3000/login
//버튼: 컨테이너+심볼+라벨
//컨테이너	#FEE500 심볼	#000000 레이블	#000000 85%
//굴곡 12px


//const Rest_api_key = '81a8ac8cb265ba4a316d3b459a700e3b';

//const redirectURI = encodeURIComponent('http://localhost:3000/'); //변경 필요ex: encodeURIComponent('http://service.redirect.url/redirect');
//
//
//export const requestKakaoLogin = () => {
//
//const kakaoLoginURL = 
//`https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirectURI}&response_type=code`;
//
//   window.location.href = kakaoLoginURL;
//} 
//
