import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

const Layout = ({children}) {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <main className="App-content">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;


//function Layout({ children }) {
//   return (
//     <div className="App">
//       <Header />
//       <div className="App-body">
//         <main className="App-content">
//           {children}
//         </main>
//       </div>
//       <Footer />
//     </div>
//   );
// }
// 
// export default Layout;