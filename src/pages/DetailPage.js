import { useParams } from "react-router-dom";
// import Rating from "../component/Rating.js";
import StarRating from "../component/RateStar.js";
//import MediaDetail from "../component/Media/MediaDetail.js";
import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
//https://api.mvti.site/info/media/{media_id}
//mvti.site/banner/1/1
//mvti.site/poster/1/1
//mvti.site/thunbnail/1/1

const HeartIcon = styled.span`
  font-size: 2rem;
  color: #ff0000;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const DetailPage = () => {
   const { id } = useParams();
   const [movie, setMovie] = useState(null);
   const [liked, setLiked] = useState(false);
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   const formatRuntime = (runtime) => {
      const hours = Math.floor(runtime / 60);
      const minutes = runtime % 60;
      if (hours === 0) {
         return minutes === 0 ? null : `${minutes}분`;
      }
      return minutes === 0 ? `${hours}시간` : `${hours}시간 ${minutes}분`;
   };

   const formatDate = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
   };

   useEffect(() => {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
         setIsAuthenticated(true);
      }

      const fetchMovie = async () => {
         try {
            const response = await axios.get(`https://api.mvti.site/info/media/${id}`);
            setMovie(response.data);
         } catch (error) {
            console.error('Error fetching movie data:', error);
         }
      };

      fetchMovie();
   }, [id]);

   if (!movie) {
      return <div>Loading...</div>;
   }

   const runtime = formatRuntime(movie.runtime || 0);

   const handleHeartClick = () => {
      setLiked(!liked);
   };

   return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
         <div className="relative mb-6">
            {movie.backdropurl_count > 0 ? (
               <img src={`https://mvti.site/banner/${movie.id}/0`} alt={movie.id} className="w-full h-96 object-cover rounded-lg" />
            ) : (
               <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center text-white">No Banner Image</div>
            )}
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full">
               <h1 className="text-4xl font-bold mb-2">{movie.title || "No Title"}</h1>
               <div className="text-lg">
                  {movie.certification || "No Certification"}
                  {runtime && ` | ${runtime}`}
                  | {formatDate(movie.release_date || new Date())}
               </div>
               {isAuthenticated && (
                  <HeartIcon onClick={handleHeartClick}>
                     {liked ? '♥' : '♡'}
                  </HeartIcon>
               )}
            </div>
         </div>
         <div className="flex flex-col md:flex-row mb-6">
            {movie.posterurl_count > 0 ? (
               <img
                  src={`https://mvti.site/poster/${movie.id}/0`}
                  alt={movie.id}
                  className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-6"
               />
            ) : (
               <div className="w-full md:w-1/3 bg-gray-700 rounded-lg flex items-center justify-center text-white mb-4 md:mb-0 md:mr-6">
                  No Poster Image
               </div>
            )}
            <div className="flex-1 text-gray-300">
               {isAuthenticated && <StarRating ratingValue={movie.rating_value || 0} />}
               <p className="mt-4">{movie.overview || "No Overview"}</p>
            </div>
         </div>
         {movie.genre && movie.genre.length > 0 && (
            <div className="mb-8">
               <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">Genres</h2>
               <div className="flex flex-wrap">
                  {movie.genre.map((genre) => (
                     <span key={genre} className="bg-gray-700 text-gray-300 py-1 px-2 sm:py-1 px-3 mr-2 mb-2 rounded-full">{genre}</span>
                  ))}
               </div>
            </div>
         )}
         {movie.director && movie.director.length > 0 && (
            <div className="mb-8">
               <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">Directors</h2>
               <p className="text-gray-300">{movie.director.join(', ')}</p>
            </div>
         )}
         {movie.actor && movie.actor.length > 0 && (
            <div className="mb-8">
               <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">Actors</h2>
               <p className="text-gray-300">{movie.actor.join(', ')}</p>
            </div>
         )}
         {movie.platform && movie.platform.length > 0 && (
            <div className="mb-8">
               <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-100">Platforms</h2>
               <div className="flex flex-wrap">
                  {movie.platform.map((platform) => (
                     <span key={platform} className="bg-gray-700 text-gray-300 py-1 px-2 sm:py-1 px-3 mr-2 mb-2 rounded-full">{platform}</span>
                  ))}
               </div>
            </div>
         )}
         {movie.backdropurl_count > 0 && (
            <div>
               <h2 className="text-2xl font-semibold mb-2 text-gray-100">Gallery</h2>
               <div className="flex flex-wrap">
                  {Array(movie.backdropurl_count).fill(0).map((_, index) => (
                     <img key={index} src={`https://mvti.site/banner/${movie.id}/${index}`} alt={`Gallery image ${index + 1}`} className="w-1/5 mr-2 mb-2 rounded-lg" />
                  ))}
               </div>
            </div>
         )}
      </div>
   );
};

export default DetailPage;

// return (
//    <section className='flex flex-col items-center p-10 mb-10 bg-white dark:bg-gray-800 text-black dark:text-white'>
//       <div className="container mx-auto p-4">
//          <MediaDetail id={parseInt(id, 10)} />
//          {/*id=변환할 문자열, 10진법*/}
//          <Rating />
//          <p />
//          <RateStar />
//          {/*reafctDom.render대신 컴포넌트로 사용!*/}
//       </div>
//    </section>
// );
// };



//data 디테일 페이지 +포스터/백드롭/별점


//      <img src={poster} alt={title} />
//         <h1>{title}</h1>
//         <h3>{year}</h3>
//         <ul>
//            {genres.map((genre,index) => (
//            <li key={index}>{genre}</li>
//            ))}
//         </ul>
//      <Rating /> {/*reafctDom.render대신 컴포넌트로 사용!*/}
//         <p>{summary}</p>


//<section className='flex flex-col items-center p-10 mb-10 bg-white dark:bg-gray-800 text-black dark:text-white'>
//<div className='datailPage_id' >
//{/*data 디테일 페이지 +포스터/백드롭/별점*/}
//
//</div>
//<img src={poster} alt={title} />
//   <h1>{title}</h1>
//   <h3>{year}</h3>
//   <ul>
//      {genres.map((genre,index) => (
//      <li key={index}>{genre}</li>
//      ))}
//   </ul>
//<Rating /> {/*reafctDom.render대신 컴포넌트로 사용!*/}
//   <p>{summary}</p>
//
//
//</section>