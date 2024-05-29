import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./Content.css";

//임의 피쳐: id, year, title, summary,poster,genres
function Content({id, year, title, summary,poster,genres,}) {
   return(
   <div className="Content">
      <Link
      to ={{
         pathname: `/movie/${id}`,
         state: 
         {
          year,
          title,
          summary,
          poster,
          genres
         }
      }}
         >
            <img src={poster} alt={title} title={title} />
            <div className="content__data">
               <h3 className="content__title">{title}</h3>
               <h5 className="content__year">{year}</h5>
               <ul className="content__genres">
                  {genres.map((genre,index) => (
                     <li key={index} className="genres__genre">
                     {genre}
                     </li>
                  ))}
               </ul>
               <p className="Content_summary">{summary.slice(0.180)}...</p>
               </div>
            </Link>
         </div>
      );
   }

   Content.prototype = {
   id: PropTypes.number.isRequired,
   year: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired,
   poster: PropTypes.string.isRequired,
   genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Content;