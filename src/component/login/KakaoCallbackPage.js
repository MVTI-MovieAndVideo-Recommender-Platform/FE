import React, { useEffect, useState } from 'react';
import axios from 'axios';
//쿼리 파라미터 추출(fetchData), 서버 요청(PostData), 이 둘을 종합하여 실행하는 콜백(destroy) 함수

//쿼리 파라미터에서 access_token을 직접 추출
//추출된 access_token을 헤더에 담아 백엔드 서버로 요청을 보내 JWT 토큰을 받음
//액세스 토큰을 이용해 서버에 인증 요청을 하고, JWT 토큰을 로컬 스토리지에 저장한 뒤, 홈 페이지로 리다이렉트

//콜백 함수(destroy)를 통해 정리 작업을 수행하며, 마지막에 홈 페이지로 리다이렉트
const KakaoCallbackPage = () => {
    const [queryParams, setQueryParams] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            // 현재 URL에서 쿼리 파라미터를 추출
            const hash = window.location.hash;
            const query = hash.split('?')[1];
            if (query) {
                const params = new URLSearchParams(query);
                const paramsObj = {};
                params.forEach((value, key) => {
                    paramsObj[key] = value;
                });
                setQueryParams(paramsObj);
                return paramsObj["access_token"];
            }
        };

        const postData = async (access_token) => {
            console.log("보낸다잉");
            console.log(access_token);
            try {
                const response = await axios.post("https://api.mvti.site/member/login/kakao", {}, {
                    headers: {
                        'access_token': access_token
                    }
                });
                console.log(response.headers.jwt);
                localStorage.setItem('jwt', JSON.stringify(response.headers.jwt));
            } catch (error) {
                console.log("잘하자잉");
                console.log(error);
            }
        };

        const runEffect = async () => {
            const access_token = await fetchData();
            if (access_token) {
                await postData(access_token);
                window.location.replace("https://mvti.site");
            }
        };

        runEffect();
    }, []);

    return (
        <div>
            <h1>Kakao Callback Page</h1>
            <p>Query Parameters:</p>
            <ul>
                {Object.entries(queryParams).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
            </ul>
        </div>
    );
};

export default KakaoCallbackPage;


//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//
//const KakaoCallbackPage = () => {
//    const [queryParams, setQueryParams] = useState({});
//
//    useEffect(() => {
//        const fetchData = async () => {
//            const query = new URLSearchParams(window.location.search);
//            const params = {};
//            query.forEach((value, key) => {
//                params[key] = value;
//            });
//            setQueryParams(params);
//
//            if (params['code']) {
//                try {
//                    const response = await axios.post('https://api.mvti.site/member/login/kakao', {
//                        code: params['code']
//                    });
//
//                    const jwtToken = response.headers.jwt;
//                    localStorage.setItem('jwt', jwtToken);
//                    window.location.href = "/";
//                } catch (error) {
//                    console.error('Kakao login failed', error);
//                }
//            }
//        };
//
//        fetchData();
//    }, []);
//
//    return (
//        <div>
//            <h1>Kakao Callback Page</h1>
//            <p>Query Parameters:</p>
//            <ul>
//                {Object.entries(queryParams).map(([key, value]) => (
//                    <li key={key}><strong>{key}:</strong> {value}</li>
//                ))}
//            </ul>
//        </div>
//    );
//};
//
//export default KakaoCallbackPage;