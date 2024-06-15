import React,{useState, useEffect} from "react";
import PropTypes from "prop-types";
import Data from "./Data.js";
import { fetchGenres } from "./API/api.js";
//import { useParams } from "react-router-dom";
//import axios from "axios";

//useParams->URL 매개변수에서 genreId() 호출-> 해당 장르의 데이터 호출!
//fetchGenres-> 장르리스트 호출
//axios -> API로부터 데이터 호출 => Content 컴포넌트로 랜더링

//useState -> 컴포넌트 상태 관리
//Hook(useEffect) ->ComponentdidMount, genreId변경 시 데이터 호출
//렌더링API(동적데이터) 기반 랜더링


//장르 특정됨! -> button text->props로 받아오고, 장르 일치 -> dataGenre 또는 Genre로 보여주기!
function Datagenre({data}) {
   const [genres, setGenres] = useState({});

   useEffect(() => {
      fetchGenres(setGenres);
   }, []);

   const groupedDataByGenre = data.reduce((acc,item) => {
      item.genre.forEach((g) => {
         if (!acc[g]) acc[g] = [];
         acc[g].push(item);
      });
      return acc;
   }, {});

   return(
      <div>
         {Object.keys(groupedDataByGenre).map((genre) => (
            <section key={genre} className="genre_action">
            <h2>{genres[genre]}</h2>
            <div className="data-list">
               {groupedDataByGenre[genre].map((item) => (
                  <data key={item.id} {...item} />
               ))}
            </div>
         </section>
         ))}
      </div>
   );
}
Datagenre.PropTypes = 
   {
   data:PropTypes.arrayOf(PropTypes.object).isRequired,
   };
export default Datagenre;