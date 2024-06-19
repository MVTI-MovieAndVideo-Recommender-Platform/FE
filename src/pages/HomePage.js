   import React,{useState} from 'react';
   import { Link } from 'react-router-dom';
   import ModalLogin from '../component/ModalLogin';
  //import "./MVTITestPage.js";
  //react icon + tailwindcss + daisyUI


   const HomePage = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
   
   return (      
      <section className='flex flex-col items-center p-10 mb-10'>
         <div className='ModalLogin'>
            <div>
               <button className='btn w-64 rounded-full' onClick={openModal}>모달_로그인</button>  
            </div>
         </div>
         <ModalLogin isOpen={isModalOpen} onClose={closeModal} />
        <div className='MVTIContainer'>
          {/*MVTIContainer 구성 : 검사하기 or 재검사+기존결과보기 버튼*/}
          <div>
            <Link to="/mvti_test">
              <button className="btn w-64 rounded-full"> MVTI 검사하기</button>
            </Link>
          </div>
        </div>
          <article className='items-center'>
            <h1>article 상단</h1>
            <section className='cards-container'>
              <div className='cards-recommeended'>
                <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                  <div className="cards-carousel">
                    <div className="data-card"/>                  
                      <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt='img1' className="rounded-box" />
                  </div>    
                    <div className="data-card">
                      <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt='img2' className="rounded-box" />
                    </div> 
                </div>
              </div>
            </section>
            <br/>
            <section className='cards-container'>
              <div className='cards-recommeended'>
                <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                  <div className="cards-carousel">
                    <div className="data-card"/>                  
                    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt='img1' className="rounded-box" />
                  </div>    
                  <div className="data-card">
                    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt='img2' className="rounded-box" />
                  </div> 
                </div>
              </div>
            </section>
          </article>
        </section>
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