//<App/>정의
import React from "react";
import {Route, Routes} from "react-router-dom";
import DetailPage from './pages/DetailPage.js';
import HomePage from './pages/HomePage.js';
//import MyPage from './pages/MyPage.js';
import MVTITestPage from './pages/MVTITestPage.js';
import MVTIResultPage from'./pages/MVTIResultPage.js';
//import Login from "./pages/Login.js";
//import Layout from "./component/Layout.js";
//import GenreContainer from "./component/GenreContainer.js";
import "./App.css";

export default function App() {
   //   const isLoggedIn = true;
   return (
         <Routes>
               {/*경로 정의*/}
               <Route path="/" element={<HomePage />} />
               <Route path="/MVTITestPage" element={<MVTITestPage />} />
               <Route path="/MVTIResultPage" element={<MVTIResultPage />} />
               <Route path="/content/:id" element={<DetailPage />} />
               
               {/*회원 전용- 로그인 상태에 따라 다른 경로로 이동 */}
         </Routes>

   );
// const isLoggedIn = false;
 //  return();

 }



   /*login 상태
   const isLoggedIn = true;
   return (
         <Routes>*/
         /*
               {/*경로 정의/}*
               {/*<Route path="/" element={<HomePage />} />/}*
               {/*<Route path="/MVTITestPage" element={<MVTITestPage />} />/}*
               {/*<Route path="/MVTIResultPage" element={<MVTIResultPage />} />/}*
               <Route path="/content/:id" element={<DetailPage />} />/}*
               //회원 전용- 로그인 상태에 따라 다른 경로로 이동 
               */
               /*
               {isLoggedIn ? (
                  //LogInModal
                  <Route path="/MyPage" element={<MyPage />} />
               ) : (
                  <Route path="/login" element={<Login />} />
               )}
         </Routes>

   );
// const isLoggedIn = false;
 //  return();

 }
*/
