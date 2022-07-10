import React, { useContext } from 'react';
import {
  useLocation,
  Navigate, 
} from 'react-router-dom';

export default function RequireAuth({ AuthContext, children }) {
  let auth = useContext(AuthContext);
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{'from': location}} replace />;
  }

  return children;
}