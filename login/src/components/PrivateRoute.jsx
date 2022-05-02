import React from 'react';
import useAuth from "./../hooks/useAuth"

import {Navigate, Route} from "react-router-dom"
export const PrivateRoute = ({children}) => {
  const auth=useAuth();
  console.log(auth);

  return (<>
 {auth?children:<Navigate to ="/login" />}
 </>
  )
}
