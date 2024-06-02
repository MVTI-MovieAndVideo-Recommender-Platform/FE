import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import MVTITestPage from './pages/MVTITestPage';
import MVTIResultPage from'./pages/MVTIResultPage';
import Layout from "./component/Layout";
//import GenreContainer from "./component/GenreContainer";
import "./App.css";

function App() {
   return (
      <Layout>
         <Routes>
         <Route path="/" element = {<HomePage/>}/>
         <Route path="/MyPage" element = {<MyPage/>}/>
         <Route path="/MVTITestPage" element = {<MVTITestPage/>}/>
         <Route path="/MVTIResultPage" element = {<MVTIResultPage/>}/>
         <Route path="/content/:id" element = {<DetailPage/>}/>
         </Routes>
      </Layout>
      
   );
 }
 
 export default App;