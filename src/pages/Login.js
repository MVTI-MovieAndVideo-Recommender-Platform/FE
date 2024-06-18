import React from 'react';
import { requestNaverLogin } from "../component/NaverLogin";
import { openKakaoLogin } from '../component/KakaoLogin';
import "./Login.css";


const SocialLogin = () => {

    return (
    <main className='flex flex-col items-center p-10 mb-10'>
        <h5>소셜 아이디로 간편하게!</h5>
        <div className="flex justify-center mb-4">
            <button className="N_login_button w-64 h-12 bg-center bg-contain bg-no-repeat" onClick={requestNaverLogin}></button>
        </div>
        <div className="flex justify-center">
            <button className="K_login_button w-64 h-12 bg-center bg-contain bg-no-repeat" onClick={openKakaoLogin}></button>
        </div>
    </main>
    )
}
export default SocialLogin;

//
////컴포넌트 모달을 열고, 네이버 로그인 요청 처리
//
//export const M_Login = () => {
////  <h1>네이버/카카오 소셜 Login</h1>;
//  const [isOpen, setIsOpen] = useState(false); 
//  const toggleOpen = () => setIsOpen(!isOpen);
//
//  return (
//    <>
//      <button onClick={toggleOpen}>
//        로그인모달 열기
//      </button>
//
//      <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
//         <h5>소셜 아이디로 간편하게!</h5>
//         <div className="flex justify-center mb-4">
//          <button className="N_login_button w-64 h-12 bg-center bg-contain bg-no-repeat" onClick={requestNaverLogin}></button>
//        </div>
//        <div className="flex justify-center">
//          <button className="K_login_button w-64 h-12 bg-center bg-contain bg-no-repeat" onClick={requestKakaoLogin}></button>
//        </div>
//      </Modal>
//    </>
//  );
//};
//
//
//모달 이외영역 클릭 -> modal 나가기
////import addEventListener;

////로그인,회원가입 버튼
//const btn_signin = document.querySelector("#btn_signin");
//const btn_signup = document.querySelector("#btn_signup");
//const conteiner = document.querySelector(".container");
//
//function Login() {
//  return <h1>login</h1>;
//  //btn_signin.addEventListener("click",() => {
//  //  conteiner.classList.add("sign-in-mode");
//  //  });
////
//  //btn_signup.addEventListener("click",() => {
//  //  conteiner.classList.add("sign-up-mode");
//  //  });
//    
//}
//
//export default Login;