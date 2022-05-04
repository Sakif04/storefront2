import { useState,useEffect } from "react";


const useAuth = () => {

    const [auth,setAuth] =useState(localStorage.getItem("storefront")?JSON.parse(localStorage.getItem("storefront")):null)
    
    useEffect(()=>
    setAuth(localStorage.getItem("storefront")?JSON.parse(localStorage.getItem("storefront")):null),[])
    return auth;
    
}

export default useAuth;