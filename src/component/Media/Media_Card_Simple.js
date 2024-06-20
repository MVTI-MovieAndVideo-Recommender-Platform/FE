import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Media_Card_Simple = ({ id }) => {
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.mvti.site/info/search');
        const data = response.data.results;
        const mediaItem = data.find(item => item.id === id);

        if (mediaItem) {
          setMediaData(mediaItem);
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
    />
  );
};

export default Media_Card_Simple;

//피쳐: id,title,runtime,release_date,certification,genre,origin_country,overview,director,actor,platform,rating_value,rating_count,posterurl_count,backdropurl_count,posterurl,backdropurl,contentype,
//   function Media({
//   id,
//   title,
//   runtime,
//   release_date,
//   certification,
//   genre,
//   origin_country,
//   overview,
//   director,
//   actor,
//   platform,
//   rating_value,
//   rating_count,
//   posterurl_count,
//   backdropurl_count,
//   posterurl,
//   backdropurl,
//   contentype,
//}) //all, movie, series!!!
//   {let MediaTypeText;
//      switch (contentype) {
//      case 0:
//         MediaTypeText = "all";
//         break;
//      case 1:
//         MediaTypeText = "movie";
//         break;
//      case 2:
//         MediaTypeText = "series";
//         break;
//      default:
//         MediaTypeText = "unknown";            
//   }
//   //api.js에서 const genres의 id, name ->id와 name 받기
//   
//   return (
//      //pathname: '/movie/1' -> detailpage/movie/id 경로로 이동
//      //start:이동 시 함께 전달되는 상태 데이터 (대상 경로의 컴포넌트에서 'useLocation'hook으로 접근!) 
//      <Link to={{
//          pathname: `/${dataTypeText}/${id}`,
//          state: {
//            id,
//            title,
//            runtime,
//            release_date,
//            certification,
//            genre,
//            origin_country,
//            overview,
//            director,
//            actor,
//            platform,
//            rating_value,
//            rating_count,
//            posterurl_count,
//            backdropurl_count,
//            posterurl,
//            backdropurl,
//            contentype,
//          },
//        }}
//        className="data-card"
//      > 
//        {posterurl_count > 0 && <img src={posterurl} alt={title} />}
//        <div className="Data">
//          <h3 className="data__title">{title}</h3>
//          <h5 className="data__year">{release_date}</h5>
//          <ul className="data__genres">
//            {genre.map((g, index) => (
//              <li key={index} className="genres__genre">
//                  {Array.isArray(g) ? g.join(", ") : g} 
//              </li>
//            ))}
//          </ul>
//          <p className="data_summary_short">{overview.slice(0, 100)}...</p>
//          <RateStar />
//        </div>
//        {backdropurl_count > 0 && <img src={backdropurl} alt={title} className="data-backdrop" />}
//      </Link>
//    );
//  }
//  export default Media;


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