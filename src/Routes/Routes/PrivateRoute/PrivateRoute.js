import React from "react";
import { useContext } from "react";
import { Spinner } from "react-bootstrap";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

// only authenticated user can visit the route
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // location where user wanted to go before authenticate
  const location = useLocation();
  if (loading) {
    return <Spinner animation="border" variant="warning" />;
  }
  if (!user) {
    // rediret user to the router they wanted to go before login
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
