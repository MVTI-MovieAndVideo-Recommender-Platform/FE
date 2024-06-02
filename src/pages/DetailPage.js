import React from "react";
import {useLocation} from "react-router-dom";
//import { useParams, useLocation } from "react-router-dom";
function DetailPage() {
//  const { id } = useParams();
  const location = useLocation();
  const { year, title, summary, poster, genres } = location.state || {};
   
  if (!location.state) {
   return <div>컨텐츠를 찾을 수 없습니다</div>
  }

  return (
   <div className="detail">
      <img src={poster} alt={title} />
      <h1>{title}</h1>
      <h3>{year}</h3>
      <ul>
         {genres.map((genre,index) => (
            <li key={index}>{genre}</li>
         ))}
      </ul>
      <p>{summary}</p>
   </div>
 );
}

export default DetailPage;