    import React from 'react';
    import "./HomePage.css";
    import Layout from '../component/Layout.js';
    
    const HomePage = () => {
  return (
      <Layout>
        <main>
          <article>
            <h1>article 상단</h1>
            <section className='popular-contents'>
               <h2>popular-contentList</h2>
              <img src="../asset/img/chungking.jpg" alt="poster01"/>
              <img src="../asset/img/poster01.jpg" alt="poster02"/>
              <img src="../asset/img/poster02.jpg" alt="poster03"/>
            </section>
            <section className='new-contents'>
            
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