import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios.js'; // axios.js 파일에서 가져온 인스턴스
//id값으로 출력

//미디어_디테일정보 가져오기
const MediaComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // API 호출->데이터 import
    axiosInstance.get('')
      .then(response => {
        setData(response.data);
        console('호출');
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data.map(media => (
        <div key={media.id}>
          <h2>{media.title}</h2>
          <p>{media.overview}</p>
          {/* 기타 데이터 출력 */}
        </div>
      ))}
    </div>
  );
};

export default MediaComponent;