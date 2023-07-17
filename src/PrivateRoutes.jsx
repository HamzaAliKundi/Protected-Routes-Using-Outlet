import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/dashboard" />;
  }
  //   return <>{token ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PrivateRoutes;
