import React from 'react';
import { Navigate } from 'react-router-dom';
import { getLSData } from '../model/localStorage';

export default function PrivateRoute({children}) {
  const isSignedIn = getLSData("authInfo") ? true : false;
  if(!isSignedIn){
    return <Navigate to="/login" />
  }

  return children;
}
