import React,{useState, useEffect} from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { userState } from '../state/atoms';
import ModalLogin from '../ModalLogin.js';

//로그인 상태에 따라 접근을 제어
//userState에 따라 접근을 허용 또는 리디렉션


const ProtectedRoute = ({ children }) => {
  const user = useRecoilValue(userState);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (user === null) {
      setModalIsOpen(true);
    }
  }, [user]);
  const closeModal = () => {
    setModalIsOpen(false);};
    
  if (user === null) {
    return <ModalLogin isOpen={modalIsOpen} onClose={closeModal} />;
  }

  return children;
};

export default ProtectedRoute;