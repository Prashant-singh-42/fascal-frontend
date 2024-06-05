import React from 'react';
import { Navigate } from 'react-router-dom';
import Home from './Home';

function PrivateRoute({ children, isAuthenticated }) {
  console.log(children)
  return isAuthenticated ? <Home /> : <Navigate to="/auth" replace />;
}

export default PrivateRoute;