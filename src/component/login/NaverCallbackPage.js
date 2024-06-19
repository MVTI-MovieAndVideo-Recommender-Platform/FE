import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NaverCallbackPage = () => {
    const [queryParams, setQueryParams] = useState({});

    useEffect(() => {
        var code = undefined;
        var state = undefined;

        const fetchData = async () => {
            // 현재 URL에서 쿼리 파라미터를 추출
            const query = new URLSearchParams(window.location.search);
            const params = {};
            query.forEach((value, key) => {
                params[key] = value;
            });
            setQueryParams(params);
            code = params["code"];
            state = params["state"];
        };
        // fetchData();

        const PostData = async () => {
            try {
                const response = await axios.post("https://api.mvti.site/member/login/naver", {}, {
                    headers: {
                        'code': code,
                        'state': state,
                        'provider': "naver"
                    }
                });
                console.log(response.headers.jwt);
                console.log(response.data);
                localStorage.setItem('jwt', JSON.stringify(response.headers.jwt));
            } catch (error) {
                console.log(error.response.data.detail);
            }
        };



        const destroy = async () => {
            fetchData();
            console.log(code, state);
            await PostData();
            // destroy 함수 내용
            // fetchData();

        };

        return async () => {
            // 정리 함수
            if (typeof destroy === 'function') {
                await destroy();
                window.location.replace("http://localhost:3000/"); // 쟈기가 관리할 홈페이지 주소
            } else {
                console.warn('destroy is not a function');
            }
        };
    }, [setQueryParams]);

    return (
        <div>
            <h1>Naver Callback Page</h1>
            <p>Query Parameters:</p>
            <ul>
                {Object.entries(queryParams).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
            </ul>
        </div>
    );
};

export default NaverCallbackPage;
