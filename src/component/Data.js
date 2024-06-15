import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import RateStar from "./RateStar";
import "./Content.css";
import { genres } from "./API/api";

//피쳐: id,title,runtime,release_date,certification,genre,origin_country,overview,director,actor,platform,rating_value,rating_count,posterurl_count,backdropurl_count,posterurl,backdropurl,contentype,
   function Data({
   id,
   title,
   runtime,
   release_date,
   certification,
   genre,
   origin_country,
   overview,
   director,
   actor,
   platform,
   rating_value,
   rating_count,
   posterurl_count,
   backdropurl_count,
   posterurl,
   backdropurl,
   contentype,
}) //all, movie, series!!!
   {let dataTypeText;
      switch (contentype) {
      case 0:
         dataTypeText = "all";
         break;
      case 1:
         dataTypeText = "movie";
         break;
      case 2:
         dataTypeText = "series";
         break;
      default:
         dataTypeText = "unknown";            
   }
   //api.js에서 const genres의 id, name ->id와 name 받기
   {let dataGenreID;
      switch(genres){
         
      }
   }
   
   return (
      //pathname: '/movie/1' -> detailpage/movie/id 경로로 이동
      //start:이동 시 함께 전달되는 상태 데이터 (대상 경로의 컴포넌트에서 'useLocation'hook으로 접근!) 
      <Link to={{
          pathname: `/${dataTypeText}/${id}`,
          state: {
            id,
            title,
            runtime,
            release_date,
            certification,
            genre,
            origin_country,
            overview,
            director,
            actor,
            platform,
            rating_value,
            rating_count,
            posterurl_count,
            backdropurl_count,
            posterurl,
            backdropurl,
            contentype,
          },
        }}
        className="data-card"
      > 
        {posterurl_count > 0 && <img src={posterurl} alt={title} />}
        <div className="Data">
          <h3 className="data__title">{title}</h3>
          <h5 className="data__year">{release_date}</h5>
          <ul className="data__genres">
            {genre.map((g, index) => (
              <li key={index} className="genres__genre">
                  {Array.isArray(g) ? g.join(", ") : g} 
              </li>
            ))}
          </ul>
          <p className="data_summary_short">{overview.slice(0, 100)}...</p>
          <RateStar />
        </div>
        {backdropurl_count > 0 && <img src={backdropurl} alt={title} className="data-backdrop" />}
      </Link>
    );
  }
  
  Data.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    certification: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ])).isRequired,
    origin_country: PropTypes.arrayOf(PropTypes.string).isRequired,
    overview: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    rating_value: PropTypes.number.isRequired,
    rating_count: PropTypes.number.isRequired,
    posterurl_count: PropTypes.number.isRequired,
    backdropurl_count: PropTypes.number.isRequired,
    posterurl: PropTypes.string.isRequired,
    backdropurl: PropTypes.string.isRequired,
    contentype: PropTypes.number.isRequired,
  };
  
  export default Data;
  //posterurl_count, backdropurl_count > 0 이미지 출력