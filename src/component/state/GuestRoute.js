import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { userState } from '../state/atoms';

const GuestRoute = ({ children }) => {
  const user = useRecoilValue(userState);

  if (user !== null) {
    return <Navigate to="/" />;
  }

  return children;
};

export default GuestRoute;