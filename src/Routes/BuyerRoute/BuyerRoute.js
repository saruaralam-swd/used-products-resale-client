import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading';
import { AuthContext } from '../../Context/AuthProvider';
import useBuyer from '../../hooks/UseBuyer';

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (loading || isBuyerLoading) {
    return <Loading></Loading>
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to={user ? '/dashboard' : '/login'} state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;