import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "../App.css";
//layout 컴포넌트

const Layout = ({children}) => {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
      {children}    
      </div>
       <Footer />
    </div>
  );
}

export default Layout;


//const Layout = ({children}) => {
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