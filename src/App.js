import React, { useEffect } from "react";
import  { BrowserRouter as Router, Routes, Route }  from "react-router-dom";
import { RecoilRoot } from 'recoil'; // RecoilRoot import
import {userState} from './component/state/atoms.js';
import DetailPage from './pages/DetailPage.js';
import HomePage from './pages/HomePage.js';
import MyPage from './pages/MyPage.js';
import MVTITestPage from './pages/MVTITestPage.js';
import MVTIResultPage from './pages/MVTIResultPage.js';
import SocialLogin from "./pages/SocialLogin.js"; // SocialLogin import
import KakaoAuthRedirect from './components/KakaoAuthRedirect';
import KakaoCallbackPage from './components/KakaoCallbackPage';
import Layout from "./component/Layout.js";
import ProtectedRoute from './component/state/ProtectedRoute.js';
import GuestRoute from './component//state/GuestRoute.js';
//import LoginModal from "./pages/LoginModal.js";

export function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mvti_test" element={<MVTITestPage />} />
        <Route path="/mvti_result" element={<MVTIResultPage />} />
        <Route path="/content/:id" element={<DetailPage />} />
        <Route path="/login" element={
          <GuestRoute>
            <SocialLogin />
          </GuestRoute>
        } />
        <Route path="/login/auth" element={
          <GuestRoute>
          <SocialLogin />
          </GuestRoute>
        } /> 
        <Route path="/mypage" element={
          <ProtectedRoute>
            <MyPage />
          </ProtectedRoute>
        } />
        {/* 추가 */}
        <Route path="/kakao-auth-redirect" element={<KakaoAuthRedirect />} />
        <Route path="/member/login/kakao/callback" element={<KakaoCallbackPage />} />        
      </Routes>
    </Layout>
  );
}
export default function AppWrapper() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}
//{isLoggedIn ? (
//  <Route path="/mypage" element={<MyPage />} />
//) : (
//  <Route path="/login" element={<SocialLogin />} />
//)}