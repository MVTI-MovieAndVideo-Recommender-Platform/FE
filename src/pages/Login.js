import React,{useState} from 'react';
import { Modal } from '../component/Mopdal';
import {requestNaverLogin} from "../component/NaverLogin";
import "./Login.css";

//컴포넌트 모달을 열고, 네이버 로그인 요청 처리
export const M_Login = () => {
//  <h1>네이버/카카오 소셜 Login</h1>;
  const [isOpen, setIsOpen] = useState(false); 
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleOpen}>
        로그인모달 열기
      </button>

      <Modal isOpen={isOpen} toggleOpen={toggleOpen}>
         <h5>로그인 컨텐츠 여기!</h5>
         <button onClick={requestNaverLogin}>Naver로 소셜로그인</button>
      </Modal>
    </>
  );
};


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