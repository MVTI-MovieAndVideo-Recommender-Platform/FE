//네이버 로그인 요청처리용 함수 정의
const clientID = 'ENDOOH8nFrZvnFqcybc2';
const REDIRECT_URI  = encodeURIComponent('http://localhost:3000/login/auth?provider=naver'); //변경 필요ex: encodeURIComponent('http://service.redirect.url/redirect');
const state = 'hLiDdL2uhPtsftcU'; //csrf방지 -> 랜덤 값 사용하기


export const requestNaverLogin = () => {
//user N로그인 페이지로 리다이렉트->네이버 로그인 인증요청
// 네이버 로그인 URL 생성
   const naverLoginURL = 
`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientID}&redirect_uri=${REDIRECT_URI}&state=${state}`;
// requestNaverLogin(): 네이버 로그인 버튼 클릭시 호출되는 함수
   window.location.href = naverLoginURL;
} 
//
