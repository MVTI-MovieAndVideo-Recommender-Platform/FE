import Modal from "./Mopdal";// Modal 컴포넌트 import
import React from "react";
import SocialLogin from "../pages/SocialLogin";

//모달 컴포넌트에 SocialLogin 컴포넌트를 자식으로 전달
const ModalLogin = ({isOpen, onClose}) => {
  return (
   <Modal isOpen={isOpen} onClose={onClose}>
      <SocialLogin />
   </Modal>
  );
};

export default ModalLogin;