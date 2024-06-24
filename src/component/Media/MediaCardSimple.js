import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
//. MediaCardSimple.js
//역할: 특정 ID에 해당하는 미디어 데이터를 API에서 가져와 Card 컴포넌트를 사용해 렌더링합.

const MediaCardSimple = ({ id }) => {
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.mvti.site/info/search?id=${id}`);
        const data = response.data.results[0];

        if (data) {
         setMediaData(data);
        }
      } catch (error) {
        console.error('Error fetching media data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!mediaData) {
   return <div>Loading...</div>;
 }

 const { title, release_date, genre, platform, rating_value, posterurl, posterurl_count } = mediaData;
 const posterSrc = posterurl_count > 0 ? posterurl[0] : '';

 return (
   <Card
     id={id}
     posterurl={posterSrc}
     title={title}
     release_date={release_date}
     genre={genre}
     platform={platform}
     rating_value={rating_value}
     overview={mediaData.overview}
     backdropurl={mediaData.backdropurl ? mediaData.backdropurl[0] : ''}
   />
 );
};

export default MediaCardSimple;

//피쳐: id,title,runtime,release_date,certification,genre,origin_country,overview,director,actor,platform,rating_value,rating_count,posterurl_count,backdropurl_count,posterurl,backdropurl,contentype,

//function DetailPage() {
//   //  const { id } = useParams();
//     const location = useLocation();
//     const { year, title, summary, poster, genres } = location.state || {};
//      
//     if (!location.state) {
//      return <div>컨텐츠를 찾을 수 없습니다</div>
//     }
//   
//     return (
//      <section className='flex flex-col items-center p-10 mb-10 bg-white dark:bg-gray-800 text-black dark:text-white'>
//   
//         <div className="detail">  
//            <h1>Data_Detail Page</h1>
//            {/*data 디테일 페이지 +포스터/백드롭/별점*/}
//         </div>
//         <img src={poster} alt={title} />
//            <h1>{title}</h1>
//            <h3>{year}</h3>
//            <ul>
//               {genres.map((genre,index) => (
//               <li key={index}>{genre}</li>
//               ))}
//            </ul>
//         <Rating /> {/*reafctDom.render대신 컴포넌트로 사용!*/}
//            <p>{summary}</p>
//
//<section className="cards container">
//  <div className="data-card_skeleton"/>
//    <div className="flex flex-col gap-4 w-52">
//      <div className="skeleton h-32 w-full"></div>
//      <div className="skeleton h-4 w-28"></div>
//      <div className="skeleton h-4 w-full"></div>
//      <div className="skeleton h-4 w-full"></div>
//  </div>
//
//</section>