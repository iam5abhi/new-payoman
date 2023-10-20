import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoutes =({children})=>{
     const auth =window.localStorage.getItem('refreshToken')
     return auth ? children:<Navigate to='/login'/>
}


export default PrivateRoutes