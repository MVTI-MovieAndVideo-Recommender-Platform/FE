import React from 'react';
import { openNaverLogin } from "../component/login/NaverLogin";
import { openKakaoLogin } from '../component/login/KakaoLogin';
import "./css/Login.css";


const SocialLogin = () => {

    return (
    <main className='flex flex-col items-center p-10 mb-10'>
        <h5 className="text-lg font-bold mb-5">소셜 아이디로 간편하게!</h5>
        <div className="flex justify-center mb-4">
            <button className="btn N_login_button w-64 h-12 bg-[#03c75a] bg-center bg-contain bg-no-repeat" 
            onClick={openNaverLogin}></button>
        </div>
        <div className="flex justify-center">
            <button className="btn K_login_button w-64 h-12 bg-[#fee500] bg-center bg-contain bg-no-repeat" 
               onClick={openKakaoLogin}></button>
        </div>
    </main>
    )
}
export default SocialLogin;

//kakao : fee500 / cmyk: 4,5,100,0
//naver : #03c75a