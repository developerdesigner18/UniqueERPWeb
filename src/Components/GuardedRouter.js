import React from "react";
import { Route, Redirect, Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
  if (!localStorage.getItem("userId")) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
