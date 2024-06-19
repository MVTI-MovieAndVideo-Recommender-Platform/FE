import axios from "axios";

//https://api.mvti.site/API 
//
//https://api.mvti.site/info/search?anything=string&isfilter=false&contentype=0&page=1&page_size=100
// API 호출 위한 axios 인스턴스 생성
// endpoint 추가
const instance = axios.create({
  baseURL: "//https://api.mvti.site/info/search?anything=string&isfilter=false&contentype=0&page=1&page_size=100",
  timeout: 10000
});

//instance 객체 내보내고 다른 파일에서 사용가능하게 함 
export default instance;



//apis폴더 > api폴더 (api를 요청하고 응답만 받는 용도) 
   //user.js (user관련 api 요청 함수들) 
//>services (응답결과를 데이터를 정제 해주는 함수들)
   //> post.js (post응답 값을 정제해줌 ) 
//> utils (공통적인 함수) 
//> config or constants (baseurl과 같은 설정)
