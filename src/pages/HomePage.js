   import React from 'react';
   import "./HomePage.css";
   import Layout from '../component/Layout.js';
   import { Link } from 'react-router-dom';
   import "./MVTITestPage.js";
    
   const HomePage = () => {
      return (
      <Layout>
        <main>
        <div className='MVTIContainer'>
          {/*MVTIContainer 구성 : 검사하기 or 재검사+기존결과보기 버튼*/}
          <div>
            <Link to="/MVTITestPage">
              <button className='MVTITestButton'>
                <h3>MVTI 검사하기</h3>
              </button>
            </Link>
          </div>
        </div>
          <article>
            <h1>article 상단</h1>
            <section className='cards-container'>
               <div className='cards-recommeended'>
                  <img className='ddbackground-card' src='/poster.jpg' alt='백_이미지'/>
                  <div className='Data-card'>
                     <svg></svg>
                     <h3>제목:Data-card에서 제목읽어오기 </h3>
                  </div>
                  <div className='backdrop'></div>
               </div>
            </section>
            <section className='cards-container'>
               <div className='cards-popular'>
                  <img className='ddbackground-card' src='/poster.jpg' alt='백_이미지'/>
                  <div className='card-data'>
                     <svg></svg>
                     <h3>제목: </h3>
                  </div>
                  <div className='backdrop'></div>
               </div>
            </section>
          </article>
        </main>
    </Layout>
  );
}

export default HomePage;


//  //import axios from "axios";
//  //import Content from"../component/Content";
//  //import { render } from '@testing-library/react';
//
//  import React from 'react';
//  import "./HomePage.css";
//  import Layout from '../component/Layout';
//  
//const HomePage = ({children}) => {
//
//return (
//    <Layout>
//    <div className='MVTIContainer'>
//      {/*MVTIContainer 구성 : 검사하기 or 재검사+기존결과보기 버튼*/}
//      {children}
//    </div>
//
//    <div className="ContentContainer">
//      {/*ContentContainer 구성*/}
//      <img src="../asset/img/chungking.jpg" alt="poster01"/>
//      <img src="../asset/img/poster01.jpg" alt="poster02"/>
//      <img src="../asset/img/poster02.jpg" alt="poster03"/>
//    </div>
//    {/* 다른 컨텐츠를 추가할 수 있도록 children을 렌더링합니다 */}
//    
//  </Layout>
//);
//}
//
//export default HomePage;
//
//
////import axios from "axios";
////import Content from"../component/Content";
////import { render } from '@testing-library/react';