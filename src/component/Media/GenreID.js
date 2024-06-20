import React,{useState, useEffect} from "react";
import {fetchGenreID} from "../APIS/Read/FetchGenreID.js"

const MediaComponent = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetchGenreID(setData);
   }, []);

   return (
      <div>
         {data.map(media => (
            <div key={media.id}>
               <h2>{media.title}</h2>
               <p>{media.overview}</p>
               <p>Genre IDs: {media.genre_id.join(', ')}</p>
               {/* 기타 데이터 출력 */}
            </div>
         ))}
      </div>
   );
};

export default MediaComponent;

export { fetchDataFromServer, fetchMediaData, genre_ID };

//useParams->URL 매개변수에서 genreId() 호출-> 해당 장르의 데이터 호출!
//fetchGenres-> 장르리스트 호출
//axios -> API로부터 데이터 호출 => Content 컴포넌트로 랜더링

//useState -> 컴포넌트 상태 관리
//Hook(useEffect) ->ComponentdidMount, genreId변경 시 데이터 호출
//렌더링API(동적데이터) 기반 랜더링


//장르 특정됨! -> button text->props로 받아오고, 장르 일치 -> dataGenre 또는 Genre로 보여주기!
//function Mediagenre({media}) {
//   const [genres, setGenres] = useState({});
//
//   useEffect(() => {
//      fetchGenres(setGenres);
//   }, []);
//
//   const groupedMediaByGenre = media.reduce((acc,item) => {
//      item.genre.forEach((g) => {
//         if (!acc[g]) acc[g] = [];
//         acc[g].push(item);
//      });
//      return acc;
//   }, {});
//
//   return(
//      <div>
//         {Object.keys(groupedMediaByGenre).map((genre) => (
//            <section key={genre} className="genre_action">
//            <h2>{genres[genre]}</h2>
//            <div className="media-list">
//               {groupedMediaByGenre[genre].map((item) => (
//                  <media key={item.id} {...item} />
//               ))}
//            </div>
//         </section>
//         ))}
//      </div>
//   );
//}
//Mediagenre.PropTypes = 
//   {
//      media:PropTypes.arrayOf(PropTypes.object).isRequired,
//   };
//export default Mediagenre;