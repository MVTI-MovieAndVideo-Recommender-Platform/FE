import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DetailPage from './pages/DetailPage.js';
import HomePage from './pages/HomePage.js';
import MyPage from './pages/MyPage.js';
import MVTITestPage from './pages/MVTITestPage.js';
import MVTIResultPage from './pages/MVTIResultPage.js';
import SocialLogin from "./pages/Login.js"; // SocialLogin import
import "./App.css";

export default function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // URL 파라미터에서 JWT 추출
    const urlParams = new URLSearchParams(location.search);
    const jwtToken = urlParams.get('jwt');
    if (jwtToken) {
      sessionStorage.setItem('jwt_token', jwtToken);
      setIsLoggedIn(true);
      // URL 정리
      window.history.replaceState({}, document.title, "/");
    } else {
      const token = sessionStorage.getItem('jwt_token');
      if (token) {
        setIsLoggedIn(true);
      }
    }
  }, [location]);

  return (
    <>
      <Routes>
        {/* 경로 정의 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/mvti_Restage" element={<MVTITestPage />} />
        <Route path="/mvti_resultpage" element={<MVTIResultPage />} />
        <Route path="/content/:id" element={<DetailPage />} />
        <Route path="/login" element={<SocialLogin />} />
        {isLoggedIn ? (
          <Route path="/mypage" element={<MyPage />} />
        ) : (
          <Route path="/login" element={<SocialLogin />} />
        )}
      </Routes>
    </>
  );
}
