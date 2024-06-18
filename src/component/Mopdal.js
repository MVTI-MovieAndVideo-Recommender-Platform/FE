//toggleOpen:모달 컴포넌트 열고 닫음

const Modal = () => {
   return (
      //flex flex-col items-center p-10 mb-10
      <section className='flex flex-col items-center p-10 mb-10'>
         <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal1</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
               <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">ESC key/button/outside of modal</p>
                  <div className="modal-action">
                     <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                     </form>
                  </div>
               </div>
               <form method="dialog" className="modal-backdrop">
                  <button>close</button>
               </form>
            </dialog>
      </section>
);
}
export default Modal;
