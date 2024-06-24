//400	잘못된 요청(미리 보기)
//403	금지
//405	메서드가 허용되지 않음(미리 보기)
//408	요청 시간 제한(미리 보기)
//500	내부 서버 오류(미리 보기)
//502	나쁜 게이트웨이
//503	서비스를 사용할 수 없음(미리 보기)
//504	게이트웨이 시간 제한(미리 보기) 
import React from 'react';
//import { Link } from 'react-router-dom';

const ErrorPage = () => {
       return (
         
        <section className='flex flex-col items-center p-10 mb-10'>
         <div className='MVTIContainer'>
           {/*MVTIContainer 구성 : 검사하기 or 재검사+기존결과보기 버튼*/}
        </div>
        </section>
   );
 }
 
 export default ErrorPage;