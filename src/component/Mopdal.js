//import { ToggleOff } from "@material-ui/icons";
import "../pages/style.css";
import React from "react";
//toggleOpen:모달 컴포넌트 열고 닫음
export const Modal = ({
    isOpen,toggleOpen,children,}) =>
      (
         <div className=
        {'overlay &{ isOpen ? "open": ""}'} onClick={toggleOpen}>
            <div className="modal" onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
        );
    