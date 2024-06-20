//login폼 버튼클릭 시 실행되는 함수. KakaoAuthRedirect컴포넌트로 이동
// window.location 변경해서 KakaoAuthRedirect로 이동한다
export const openKakaoLogin = () => {
   // window.location.href = "/#/kakao-auth-redirect";
   window.location.href = "https://mvti.site/#/kakao-auth-redirect";
};

         
            
//export const KakaoLogin_a = () => {
//   const encodedRedirectUri = encodeURIComponent(`${REDIRECT_URI}`);
//   const kakaoLoginURL = 
//`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${encodedRedirectUri}`; 
//   window.location.href = kakaoLoginURL;
//}
//
//export const requestKakaoLogin = () => {
////user K로그인 페이지로 리다이렉트->카카오 로그인 인증요청
//// 카카오 로그인 URL 생성
//const encodedRedirectUri = encodeURIComponent(`${REDIRECT_URI}`);
//
//const kakaoLoginURL = 
//`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${encodedRedirectUri}`; 
//   window.location.href = kakaoLoginURL;
//} 

//const REST_API_KEY = '2eae58859131ba2e2305907af81ba954';
//const REDIRECT_URI = 'http://localhost:3000/login/auth';
////const REQUEST_ADDRESS = 'http://localhost:3000/';
//const REQUEST_ADDRESS = 'https://api.mvti_test/member/login'; // 백엔드 서버 주소
//const kakaoLoginAPI = `https://kauth.kakao.com/oauth/authorize?
//   response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
//
////login폼 버튼클릭 시 실행되는 함수
//export const openKakaoLogin  = () => {
//   window.open(kakaoLoginAPI, "_self");
//};
//
//function KakaoLogin () {
//   const setUser = useSetRecoilState(userState);
//   const navigate = useNavigate();
//
//   // 해당 페이지 로딩시 url에 인가코드가 담김
//   useEffect(() => {
//      //인가코드 추출 변수 생성_현재 url주소 가짐
//      const url = new URL(window.location.href);
//      
//      //만든 URL(newURL)에서 'code= ' 써진 키값 찾고 return value!
//      const code = url.searchParams.get("code");
//      
//      if (code) {
//         axios.get(`${REQUEST_ADDRESS}auth/kakao?code=${code}`).then((res) => {
//            //ok response확인 -> 유저로그인 , 토큰 브라우저에 저장
//            //url로 서버에서 유저정보 요청   
//            localStorage.setItem("token",res.data.token);
//            //"code" -> 백엔드의 카카오 로그인 주소로 보냄
//      
//            //REQUEST_ADDRESS : 내 앱 서버 주소. 컨트롤러에 매핑된 주소로 인가코드가 서버로 넘어간다.
//            axios.get(`${REQUEST_ADDRESS}userinfo`, {
//               headers:{
//                  //header에 토큰 저장  
//                  Authorization: `Bearer ${res.data.token}`,
//               },
//            })
//            //서버 : 유효성 검사->확인 후 유저데이터 전달
//            //FE :
//            //const setUser = useSetRecoilState(userState);
//            //recoilState -> 유저 데이터 저장 후 dashboard로 이동시키기!
//            .then((response) => {
//               setUser(response.data);
//               navigate("/dashboard");
//            });
//         });   
//      }
//   },[navigate,setUser]);
//   
//   return null;
//}
//export default KakaoLogin;