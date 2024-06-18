import React from 'react';
import { Link } from 'react-router-dom';

function MVTIResultPage() {
  return (
    <section className='flex flex-col items-center p-4 mb-10 w-full'>
      {/*MVTIContainer 구성 : 검사하기 or 재검사+기존결과보기 버튼*/}
      <h1>MVTIResultPage</h1>
        <div className='MVTIContainer'>
      <div>
        <Link to="/mvti_test">
          <button className="btn w-64 rounded-full"> MVTI 검사하기</button>
        </Link>
      </div>
    </div>
      <article className=''>
        <h1>article 상단</h1>
      </article>
    </section>
  );
};

export default MVTIResultPage;