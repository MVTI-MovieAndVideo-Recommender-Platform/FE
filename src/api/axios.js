import axios from "axios";

// API 호출 위한 axios 인스턴스 생성
// endpoint 추가
const instance = axios.create({
  baseURL: `https://api.mvti.site/info/media/`,
  timeout: 20000
});

//instance 객체 내보내고 다른 파일에서 사용가능하게 함 
export default instance;

//회원 관련 api
//
//-sso 로그인 엔드포인트-
//[POST]  => https://api.mvti.site/member/login/kakao
//[POST]  => https://api.mvti.site/member/login/naver
//[GET] => https://api.mvti.site/member/login/kakao/callback
//
//-mbti 수정하는 엔드포인트-
//[PATCH] => https://api.mvti.site/member/editmbti?mbti="변경할 mbti" 헤더에 jwt토큰 값 넣어서 보내야 해요
//
//-회원 탈퇴 엔드포인트-
//[DELETE] => https://api.mvti.site/member/secession 헤더에 jwt토큰 값 넣어서 보내야 해요
//
