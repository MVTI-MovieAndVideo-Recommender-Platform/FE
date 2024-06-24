import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NaverCallbackPage = () => {
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
                return { code: paramsObj["code"], state: paramsObj["state"] };
            }
            return {};
        };

        const postData = async (code, state) => {
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

        const runEffect = async () => {
            const { code, state } = await fetchData();
            if (code && state) {
                await postData(code, state);
                window.location.replace("https://mvti.site");
            }
        };

        runEffect();
    }, []);

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

