import React from "react";
import Header from "./Header";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="bg-white  dark:bg-gray-900 text-black dark:text-white pt-10 pb-10">
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;