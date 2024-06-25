import axios from "axios";

// API 호출 위한 axios 인스턴스 생성
// endpoint 추가
const instance = axios.create({
  baseURL: `https://api.mvti.site/info/media/`,
  timeout: 20000
});

//instance 객체 내보내고 다른 파일에서 사용가능하게 함 
export default instance;
//완