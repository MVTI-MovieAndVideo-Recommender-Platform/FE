import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { RecoilRoot,useSetRecoilState } from 'recoil'; // RecoilRoot import
import {userState} from './component/state/atoms.js';
import DetailPage from './pages/DetailPage.js';
import HomePage from './pages/HomePage.js';
import MyPage from './pages/MyPage.js';
import MVTITestPage from './pages/MVTITestPage.js';
import MVTIResultPage from './pages/MVTIResultPage.js';
import SocialLogin from "./pages/Login.js"; // SocialLogin import
import Layout from "./component/Layout.js";

import ProtectedRoute from './component/state/ProtectedRoute.js';
import GuestRoute from './component//state/GuestRoute.js';
import LoginModal from "./pages/LoginModal.js";

export function App() {
  // 로그인 상태 관리
  const location = useLocation();
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    // URL 파라미터에서 JWT 추출
    const urlParams = new URLSearchParams(location.search);
    const jwtToken = urlParams.get('jwt');

    if (jwtToken) {
      sessionStorage.setItem('jwt_token', jwtToken);
      setUser({ jwt: jwtToken });
      // URL 정리
      window.history.replaceState({}, document.title, "/");
    } else {
      const token = sessionStorage.getItem('jwt_token');
      if (token) {
        setUser({jwt:token});
      }
    }
  }, [location,setUser]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mvti_test" element={<MVTITestPage />} />
        <Route path="/mvti_result" element={<MVTIResultPage />} />
        <Route path="/content/:id" element={<DetailPage />} />
        <Route path="/login_modal" element={<LoginModal />} />
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