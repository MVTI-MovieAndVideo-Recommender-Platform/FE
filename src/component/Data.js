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