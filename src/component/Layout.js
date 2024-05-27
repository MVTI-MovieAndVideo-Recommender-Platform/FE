//layout.js에 합치기
//import Header from './component/Header';
//import {Footer} from './component/Footer';
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "./SideBar";
import "../App.css";

function Layout({ children }) {
   return (
     <div className="App">
       <Header />
       <div className="App-body">
         <SideBar />
         <main className="App-content">
           {children}
         </main>
       </div>
       <Footer />
     </div>
   );
 }
 
 export default Layout;