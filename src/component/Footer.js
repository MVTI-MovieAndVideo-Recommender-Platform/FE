import React from "react";
import "../App.css";
//head,foot : app.css

function Footer() {
  return (
    <footer className="App-footer">
      <div className="background_Footer">
         <section>
          <ul className="used_stacks">
            <li><a className="stack_react"></a></li>
            <li><a className="stack_B"></a></li>
           <li><a className="stack_C"></a></li>
            <li><a className="stack_D"></a></li>
            </ul>
         <ul className="links">
            <li><a>About</a></li>
            <li><a href="https://github.com/MVTI-MovieAndVideo-Recommender-Platform" alt="MVTI_Github!">MVTI_Github</a></li>
            <li><a>contact</a></li>
         </ul>
         <p className="rightsReserved"> CCL_Team'MVTI'</p>
         </section>
      </div>
   </footer>
  );
}

export default Footer;