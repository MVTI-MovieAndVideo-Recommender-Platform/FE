import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = ()=> {
   return(

      
    <section className='flex flex-col items-center p-4 mb-10 w-full'>
    {/*아바타 + 추천리스트 + 찜한 영화 + 재검사*/}
    <h1>MVTIResultPage</h1>
      <div className='avartar'>
    <div>
    </div>
  </div>
    <article className='Media_Preference'>
      <h1>찜 리스트</h1>
    </article>
  </section>
);
};
export default MyPage;