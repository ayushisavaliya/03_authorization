import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = () => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  if (isAuthenticated) {
    return <Navigate to={role === 'admin' ? '/admin' : '/user'} replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
