import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = ()=> {
   return(
    <section className='flex 0'>
            <h5>MyPage_return</h5>
    {/*MVTIContainer 구성 : 검사하기 or 재검사+기존결과보기 버튼*/}
    <h1>MVTITestPage</h1>
      <div className='MVTIContainer'>
        <Link to="/">
          <button className="btn w-64 rounded-full"> HomePage</button>
        </Link>
      </div>
    <article className=''>
      <h1>article 상단</h1>
    </article>
  </section>
   )
}

export default MyPage;