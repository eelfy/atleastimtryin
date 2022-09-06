import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUser } from 'utils/user';

const useLogout = () => {
  const navigate = useNavigate();

  return () => {
    removeUser();
    navigate('/login');
  };
};

export { useLogout };
