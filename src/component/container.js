//페이지 중앙: MVTI추천, 시청중, 찜, 등등
import React from 'react';
import axios from "axios";
import Content from './Content';
function Container_All() {
   class container_all extends React.Component{
      state={
         isLoading:true,
         contents:[]
      };
   }
   getContents = async () => {
      try{
         const{
            data:{
               data:{movies:contents} //샘플API Response에서 Movies를 contents로 사용 
            }
         } = await axios.get(
            "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
         );
         this.setState({contents, isLoading})
      }
   }


  return (
    <article className="container_all">
      {/* 중앙 컨텐츠 내용 */}
    </article>
  );
}

export default Container_All;