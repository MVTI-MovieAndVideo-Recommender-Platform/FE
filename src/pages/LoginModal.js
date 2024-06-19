import Modal from "../component/Mopdal";// Modal 컴포넌트 import
import React from "react";
import SocialLogin from "./SocialLogin"; // Login 컴포넌트 import

const LoginModal = () => {
  return (
    <div>
      <Modal>
        <SocialLogin />
      </Modal>
    </div>
  );
};

export default LoginModal;