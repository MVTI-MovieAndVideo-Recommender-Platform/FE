import React from "react";
import "./Modal.css";
//toggleOpen:모달 컴포넌트 열고 닫음

export const Modal = ({isOpen,toggleOpen,children,}) => {
   return(
   <div className={`overlay ${isOpen ? "open" : ""}`}  onClick={toggleOpen}>
      <div className="modal" onClick={(e)=> e.stopPropagation()}>
         {children}
      </div>
   </div>
   );
};
   

      