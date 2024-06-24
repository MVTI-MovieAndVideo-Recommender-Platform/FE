import React from "react";
//import "./Modal.css"; // 모달 스타일을 정의한 CSS 파일

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // isOpen이 false면 모달을 렌더링하지 않음

  return (//absolute top-2 right-2 text-gray-500 dark:text-gray-30
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg relative">
        <button className="absolute top-2 right-2 text-gray-500 dark:text-gray-300"
         onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;