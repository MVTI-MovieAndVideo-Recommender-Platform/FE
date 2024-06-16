import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
//layout 컴포넌트

const Layout = ({children}) => {
  return (
    <wrap>
      <Header/>
      <div>
         {children}    
      </div>
       <Footer />
    </wrap>
  );
}

export default Layout;

//<div className="flex flex-col min-h-screen text-center">


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