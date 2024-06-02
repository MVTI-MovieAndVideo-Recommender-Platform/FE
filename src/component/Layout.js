import React from "react";
import Header from "./Header";
import Footer from "./Footer";
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