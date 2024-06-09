import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PrivateRoute({children}) {
  const isSignedIn = true;
  if(!isSignedIn){
    return <Navigate to="/login" />
  }

  return children;
}
