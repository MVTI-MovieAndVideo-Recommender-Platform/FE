//카카오 로그인 요청처리용 함수 정의

const clientID = '';
const redirectURI = encodeURIComponent('http://localhost:8000/redirect'); //변경 필요ex: encodeURIComponent('http://service.redirect.url/redirect');
const state = ''; //csrf방지 -> 랜덤 값 사용하기


export const requestNaverLogin = () => {
//user K로그인 페이지로 리다이렉트->카카오 로그인 인증요청
// 카카오 로그인 URL 생성
   const kakaoLoginURL = 
`https://nid.kakao.com/oauth2.0/authorize?`;
// requestNaverLogin(): 네이버 로그인 버튼 클릭시 호출되는 함수
   window.location.href = kakaoLoginURL;
} 

