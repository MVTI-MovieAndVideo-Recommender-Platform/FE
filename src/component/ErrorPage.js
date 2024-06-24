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
         <div className="md:pl-[70px] flex flex-col items-center relative pt-10 bg-white dark:bg-gray-800 text-black dark:text-white  h-screen w-full md:flex">
         <div className=" h-screen  bg-white dark:bg-gray-800 text-black dark:text-white  flex flex-col md:items-start lg:w-full px-2.5 md:px-0">
            <div class="image-wrapper">
               <img  class="image"
                  alt="404backGround"
                  className="h-screen "
                  src="../../page404.jpg">
               </img>
            </div>
               <h7 className="text-[24px] font-[20px] font-poppins w-[200px]">
                  홈 화면으로 이동
               </h7>
               <svg
                   className="pt-1"
                   width="30"
                   height="30"
                   viewBox="0 0 30 30"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 ></svg>
               <div className="flex items-center  bg-white dark:bg-gray-800 text-black dark:text-white ">
   
                 <svg
                   className="pt-1"
                   width="30"
                   height="30"
                   viewBox="0 0 30 30"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     d="M8.9375 26.375C8.625 26.0625 8.46875 25.6925 8.46875 25.265C8.46875 24.8383 8.625 24.4688 8.9375 24.1562L18.0938 15L8.90625 5.8125C8.61458 5.52083 8.46875 5.15625 8.46875 4.71875C8.46875 4.28125 8.625 3.90625 8.9375 3.59375C9.25 3.28125 9.62 3.125 10.0475 3.125C10.4742 3.125 10.8438 3.28125 11.1562 3.59375L21.6563 14.125C21.7813 14.25 21.87 14.3854 21.9225 14.5312C21.9742 14.6771 22 14.8333 22 15C22 15.1667 21.9742 15.3229 21.9225 15.4688C21.87 15.6146 21.7813 15.75 21.6563 15.875L11.125 26.4062C10.8333 26.6979 10.4742 26.8438 10.0475 26.8438C9.62 26.8438 9.25 26.6875 8.9375 26.375Z"
                     fill="#581DFF"
                   />
                 </svg>
               </div>
            </div>
            <div className="relative right-0 h-screen hidden md:flex ">
              <img
                alt="404-Icon"
                className="h-screen absolutec object-cover"
                src="/assets/components/404/errorRectangle.svg"
              />
            </div>
         <h10>img from <a href="https://kr.freepik.com/free-vector/flat-design-no-data-illustration_47718911.htm#query=404%20error%20page&position=15&from_view=keyword&track=ais_user&uuid=66c00204-c7a7-44a3-8e59-145d6cd33d7a">Freepik</a></h10>
       </div>
     );
 }
 
 export default ErrorPage;