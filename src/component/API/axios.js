import axios from "axios";

//https://api.mvti.site/API 
// API 호출 위한 axios 인스턴스 생성
const instance = axios.create({
  baseURL: "//https://api.mvti.site/info/search?anything=string&isfilter=false&contentype=0&page=1&page_size=100",
});

//instance 객체 내보내고 다른 파일에서 사용가능하게 함 
export default instance;