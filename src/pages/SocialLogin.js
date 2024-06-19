import React from 'react';
import { openNaverLogin } from "../component/login/NaverLogin";
import { openKakaoLogin } from '../component/login/KakaoLogin';
import "./Login.css";


const SocialLogin = () => {

    return (
    <main className='flex flex-col items-center p-10 mb-10'>
        <h5>소셜 아이디로 간편하게!</h5>
        <div className="flex justify-center mb-4">
            <button className="N_login_button w-64 h-12 bg-center bg-contain bg-no-repeat" 
            onClick={openNaverLogin}></button>
        </div>
        <div className="flex justify-center">
            <button className="K_login_button w-64 h-12 bg-center bg-contain bg-no-repeat" 
            onClick={openKakaoLogin}></button>
        </div>
    </main>
    )
}
export default SocialLogin;
