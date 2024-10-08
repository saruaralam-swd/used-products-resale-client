import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Components/Loader";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../hooks/UseAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader></Loader>;
  }

  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate
      to={user ? "/dashboard" : "/login"}
      state={{ from: location }}
      replace
    ></Navigate>
  );
};

export default AdminRoute;
