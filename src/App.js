import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from './pages/DetailPage.js';
import HomePage from './pages/HomePage.js';
import MyPage from './pages/MyPage.js';
//import SamplePage from './pages/SamplePage.js';
import MVTITestPage from './pages/MVTITestPage.js';
import MVTIResultPage from './pages/MVTIResultPage.js';
import GenrePage from './pages/GenrePage.js';
import Error from './pages/Error.js';

import SocialLogin from "./pages/SocialLogin.js"; // SocialLogin import
import NaverAuthRedirect from './component/login/NaverAuthRedirect.js';
import NaverCallbackPage from './component/login/NaverCallbackPage.js';
import KakaoAuthRedirect from './component/login/KakaoAuthRedirect.js';
import KakaoCallbackPage from './component/login/KakaoCallbackPage.js';

import Layout from "./component/Layout.js";

import ProtectedRoute from './component/state/ProtectedRoute.js';
import GuestRoute from './component/state/GuestRoute.js';
import MvtiReTestPage from "./pages/MVTIReTestPage.js";
import SearchPage from "./pages/SearchPage.js";

export function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mvti_test" element={<MVTITestPage />} />
          <Route path="/re_mvti_test" element={<MvtiReTestPage />} />
          <Route path="/mvti_result" element={<MVTIResultPage />} />
          <Route path="/genre/:id" element={<GenrePage />} /> {/* GenrePage 경로 설정 */}
          <Route path="/content/:id" element={<DetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/error" element={<Error />} />

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
          <Route path="/login/naver" element={<NaverAuthRedirect />} />
          <Route path="/login/naver/callback" element={<NaverCallbackPage />} />
          <Route path="/kakao-auth-redirect" element={<KakaoAuthRedirect />} />
          <Route path="/login/kakao/callback" element={<KakaoCallbackPage />} />
        </Routes>
      </Layout>
    </Router>

  );
}
export default App;



//서비스 제공 시 해시라우팅으로 작성해줘야함!!
//https://mvti.site/#/ 원하는 라우팅 주소!(내부 페이지는 자동으로 #을 넣어주는데, 해시라우팅 기능!!
//하이퍼링크 작성 시 /#/ 넣어주기!!!
//