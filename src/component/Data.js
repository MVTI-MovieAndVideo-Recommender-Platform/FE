import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Content.css";

//피쳐: id,title,runtime,release_date,certification,genre,origin_country,overview,director,actor,platform,rating_value,rating_count,posterurl_count,backdropurl_count,posterurl,backdropurl
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
})

//contentype:1_movie, 2_content
{
    const dataTypeText = contentype === 1 ? "movie" : "content";
  
    return (
      <Link
        to={{
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
        <img src={posterurl} alt={title} />
        <div className="Data">
          <h3 className="data__title">{title}</h3>
          <h5 className="data__year">{release_date}</h5>
          <ul className="data__genres">
            {genre.map((g, index) => (
              <li key={index} className="genres__genre">
                {g}
              </li>
            ))}
          </ul>
          <p className="data_summary">{overview.slice(0, 180)}...</p>
        </div>
      </Link>
    );
  }
  
  Data.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    certification: PropTypes.string.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
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


//  use content;
//
//CREATE TABLE media (
//    id INT UNSIGNED NOT NULL PRIMARY KEY,
//    type ENUM('movie', 'series') NOT NULL,
//    title VARCHAR(255) NOT NULL,
//    runtime SMALLINT UNSIGNED NOT NULL,
//    release_date DATE NOT NULL,
//    certification VARCHAR(255) DEFAULT NULL,
//    genre VARCHAR(255) NOT NULL,
//    origin_country VARCHAR(255) NOT NULL,
//    overview VARCHAR(2000) NOT NULL,
//    director VARCHAR(255) DEFAULT NULL,
//    actor VARCHAR(1000) DEFAULT NULL,
//    platform VARCHAR(255) NOT NULL,
//    rating_value DECIMAL(2, 1) UNSIGNED NOT NULL CHECK (
//        rating >= 0
//        AND rating <= 5
//    ),
//    rating_count INT UNSIGNED NOT NULL,
//    posterurl_count TINYINT UNSIGNED DEFAULT 0,
//    backdropurl_count TINYINT UNSIGNED DEFAULT 0,
//    posterurl VARCHAR(1000) DEFAULT NULL,
//    backdropurl VARCHAR(1000) DEFAULT NULL
//);
