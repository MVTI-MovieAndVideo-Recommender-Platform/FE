import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage'
import MVTITestPage from './pages/MVTITestPage';
import MVTIResultPage from'./pages/MVTIResultPage';
import Layout from "./component/Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/DetailPage' element={<DetailPage />} />
         <Route path='/MyPage' element={<MyPage />} />
         <Route path='/MVTITestPage' element={<MVTITestPage />} />
         <Route path='/MVTIResultPage' element={<MVTIResultPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;