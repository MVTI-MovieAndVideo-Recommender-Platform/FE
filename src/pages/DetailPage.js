import React from "react";
import {useLocation} from "react-router-dom";
import Rating from "../component/Rating.js";
//import { useParams, useLocation } from "react-router-dom";


//mvti.site/banner/1/1
//mvti.site/poster/1/1
//mvti.site/thunbnail/1/1


function DetailPage() {
//  const { id } = useParams();
  const location = useLocation();
  const { year, title, summary, poster, genres } = location.state || {};
   
  if (!location.state) {
   return <div>컨텐츠를 찾을 수 없습니다</div>
  }

  return (
   <section className='flex flex-col items-center p-10 mb-10'>
      <div className="detail">  
         <h1>Data_Detail Page</h1>
          {/*data 디테일 페이지 +포스터/백드롭/별점*/}
         </div>
      <img src={poster} alt={title} />
      <h1>{title}</h1>
      <h3>{year}</h3>
      <ul>
         {genres.map((genre,index) => (
            <li key={index}>{genre}</li>
         ))}
      </ul>
      <Rating /> {/*reafctDom.render대신 컴포넌트로 사용!*/}
      <p>{summary}</p>
   </section>

 );
}

export default DetailPage;