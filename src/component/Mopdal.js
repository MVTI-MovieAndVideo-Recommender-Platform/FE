
      //flex flex-col items-center p-10 mb-10
//      <section className='flex flex-col items-center p-10 mb-10'>
//         <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal1</button>
//            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
//               <div className="modal-box">
//                  <h3 className="font-bold text-lg">#Modal#</h3>
//                  <p className="py-4">
//                     {children}
//                  </p>
//                  <div className="modal-action">
//                     <form method="dialog">
//                      {/* if there is a button in form, it will close the modal */}
//                      <button className="btn">Close</button>
//                     </form>
//                  </div>
//               </div>
//               <form method="dialog" className="modal-backdrop">
//                  <button>close</button>
//               </form>
//            </dialog>
//      </section>


import React from "react";
import "./Modal.css"; // 모달 스타일을 정의한 CSS 파일

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // isOpen이 false면 모달을 렌더링하지 않음

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;