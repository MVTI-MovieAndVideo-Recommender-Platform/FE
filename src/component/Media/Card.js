import React from 'react';
import { Link } from 'react-router-dom';
//기본 매개변수 -> 필드 undefined / null인 경우에도 에러없음!!
//> genre

const Card = ({ posterurl = '', title, release_date, genre = [], platform = [], rating_value, id, overview = '', backdropurl = '' }) => {
   return (
     <div className="card card-compact w-96 bg-base-100 shadow-xl">
       <figure>
         <img src={posterurl} alt="Poster" />
       </figure>
       <div className="card-body">
         <h2 className="title">{title}</h2>
         <h5 className="release_date">{release_date}</h5>
         <h5 className="genre">{genre.join(', ')}</h5>
         <h5 className="platform">{platform.join(', ')}</h5>
         <h5 className="rating_value">{rating_value}</h5>
         <p className="data_summary_short">{overview.slice(0, 100)}...</p>
         <div className="card-actions justify-end">
           <Link to={`/content/${id}`}>
             <button className="btn btn-primary">상세페이지로</button>
           </Link>
         </div>
       </div>
       {backdropurl && <img src={backdropurl} alt={title} className="data-backdrop" />}
     </div>
   );
 };
 
 export default Card;
//const Card = ({ posterurl, title, release_date, genre, platform, rating_value, id }) => {
//   return (
//     <div className="card card-compact w-96 bg-base-100 shadow-xl">
//       <figure>
//         <img src={posterurl} alt="Poster" />
//       </figure>
//       <div className="card-body">
//         <h2 className="title">{title}</h2>
//         <h5 className="release_date">{release_date}</h5>
//         <h5 className="genre">{genre.join(', ')}</h5>
//         <h5 className="platform">{platform.join(', ')}</h5>
//         <h5 className="rating_value">{rating_value}</h5>
//         <p className="data_summary_short">{overview.slice(0, 100)}...</p>
//         <div className="card-actions justify-end">
//           <Link to={`/content/${id}`}>
//             <button className="btn btn-primary">상세페이지로</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
// 
