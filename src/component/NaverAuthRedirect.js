import React, { useEffect } from 'react';

const REST_API_KEY = 'ENDOOH8nFrZvnFqcybc2';
// const REDIRECT_URI = 'https://mvti.site/login/naver/callback';
const REDIRECT_URI = 'http://localhost:3000/login/naver/callback';
// //const REQUEST_ADDRESS = 'http://localhost:3000/';
// const REQUEST_ADDRESS = 'https://api.mvti_test/member/login'; // 백엔드 서버 주소
// const kakaoLoginAPI = `https://kauth.kakao.com/oauth/authorize?
//    response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

const NaverAuthRedirect = () => {
    useEffect(() => {
        const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&state=${Math.random().toString(36).substring(3, 14)}`;
        window.location.replace(NAVER_AUTH_URL);
    }, []);

    return (
        <div>
            <p>Redirecting to Naver for authentication...</p>
        </div>
    );
};

export default NaverAuthRedirect;
