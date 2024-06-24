import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { userState } from '../state/atoms';

//로그인 상태에 따라 접근을 제어
//userState에 따라 접근을 허용 또는 리디렉션

const ProtectedRoute = ({ children }) => {
  const user = useRecoilValue(userState);

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;