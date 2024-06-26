import React from 'react';
import { openNaverLogin } from "../component/login/NaverLogin";
import { openKakaoLogin } from '../component/login/KakaoLogin';
import "./css/Login.css";


const SocialLogin = () => {

    return (    <main className='flex flex-col items-center p-10 mb-10'>
      <h5 className='text-xl'>소셜 아이디로 간편하게!</h5>
      <div className="flex justify-center mb-4 mt-3">
        <button 
          className="N_login_button w-64 h-14 text-white font-bold rounded-lg flex items-center justify-center"
          style={{ backgroundColor: '#03c75a' }}
          onClick={openNaverLogin}
        >
          네이버 로그인
        </button>
      </div>
      <div className="flex justify-center">
        <button 
          className="w-64 h-14 text-black font-bold rounded-lg flex items-center justify-center"
          style={{ backgroundColor: '#fee500' }}
          onClick={openKakaoLogin}
        >
          카카오 로그인
        </button>
        </div>
    </main>
    )
}
export default SocialLogin;

//버튼 크기맞추고 배경 채워넣음!