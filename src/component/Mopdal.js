import React, { useEffect, useRef, useCallback } from "react";
import "./Modal.css";
//toggleOpen:모달 컴포넌트 열고 닫음

export const Modal = ({isOpen,toggleOpen,children,}) => {
   const modalRef = useRef(null);

   const handleClickOutside = useCallback((event) => {
      if(modalRef.current && !modalRef.current.contains(event.target)) {
         toggleOpen();
      }
   },[toggleOpen]);

   useEffect(() => {
      if(isOpen) {
         document.addEventListener('mousedown', handleClickOutside);
      } else {
         document.removeEventListener('mousedown',handleClickOutside);
      }
   

      return () => {
         document.removeEventListener('mousedown',handleClickOutside);
      };
   }, [isOpen, handleClickOutside]);

if (!isOpen){
   return null;
}
return (
   //modal-overlay,modal-content
   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
   <div className="bg-white p-8 rounded-lg w-full max-w-lg" ref={modalRef}>
     {children}
   </div>
 </div>
)};

