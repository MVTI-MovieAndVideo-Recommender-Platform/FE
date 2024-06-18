//import axios from "axios";//카카오 로그인 요청처리용 함수 정의
const REST_API_KEY = '2eae58859131ba2e2305907af81ba954';
const REDIRECT_URI = 'http://localhost:3000/login/auth';
//const REDIRECT_URI = encodeURIComponent('http://localhost:3000/login/auth?provider=kakao'); 

//const state = 'hLiDdL2uhPtsftcU'; //csrf방지 -> 랜덤 값 사용하기

export const KakaoLogin_a = () => {
   const encodedRedirectUri = encodeURIComponent(`${REDIRECT_URI}`);
   const kakaoLoginURL = 
`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${encodedRedirectUri}`; 
   window.location.href = kakaoLoginURL;
}

export const requestKakaoLogin = () => {
//user K로그인 페이지로 리다이렉트->카카오 로그인 인증요청
// 카카오 로그인 URL 생성
//const encodedRedirectUri = encodeURIComponent(`${REDIRECT_URI}?provider=kakao`);
const encodedRedirectUri = encodeURIComponent(`${REDIRECT_URI}`);

const kakaoLoginURL = 
`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${encodedRedirectUri}`; 
   window.location.href = kakaoLoginURL;

   const kakaoLoginURLs = 
   `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${encodedRedirectUri}`; 
      window.location.href = kakaoLoginURLs;   
   
   
} 

//발급요청) https://kauth.kakao.com/oauth/authorize?response_type=code&client_id={클라이언트id}&redirect_uri={리다이렉트uri}
//엑세스토큰) https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={클라이언트id}&redirect_uri={리다이렉트uri}&code={발급코드} 헤더 Content-type:application/x-www-form-urlencoded

//`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;


//url에서 provider파라미터 제외하고 나중에 추가하기로!
//https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}'


//http://localhost:3000/login/auth
//http://localhost:3000/login

//등록된 도메인:
//https://mvti.site/login/auth
//http://localhost:3000/login/auth

//post -> get
//수정 전_https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirectURI}&response_type=code


//로그인 버튼_형식 체크 및 css 적용
//mvti TEST! 앱 키(rest API) : 2eae58859131ba2e2305907af81ba954/ 
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
