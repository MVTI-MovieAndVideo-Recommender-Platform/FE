import React, { useEffect } from 'react';

//
const REST_API_KEY = '2eae58859131ba2e2305907af81ba954';
const REDIRECT_URI = 'https://api.mvti.site/member/login/kakao/callback';



const KakaoAuthRedirect = () => {
    useEffect(() => {
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
        window.location.replace(KAKAO_AUTH_URL);
    }, []);

    return (
        <div>
            <p>Kakao인증 페이지로 리다이렉트 중...</p>
        </div>
    );
};

export default KakaoAuthRedirect;

// //const REQUEST_ADDRESS = 'http://localhost:3000/';
// const REQUEST_ADDRESS = 'https://api.mvti_test/member/login'; // 백엔드 서버 주소
// const kakaoLoginAPI = `https://kauth.kakao.com/oauth/authorize?
//    response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;