import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const tokenurl="http://127.0.0.1:8000/auth/jwt/create/";


export const LogIn = () => {
  const [username,setUser]=useState("")
  const [password,setPassword]=useState("");
  
   function handlePassChange(e){
    setPassword(e.target.value);
   
  }
  async function handleSubmit(e){
    const nameInput=e.target.username.value;
    const passInput=e.target.password.value;
    e.preventDefault();
    const data={"username":nameInput,"password":passInput};
    const token= await axios.post(tokenurl,data,
      {
        headers:{
        Accept: "application/json",
          'Content-Type':'application/json;charset=UTF-8'
      }  
    }).then(res=>res.data)
      console.log(token);

    if (token.refresh){
      localStorage.setItem("storefront",JSON.stringify(token))

    }
  }
  
  
  function handleUserChange(e){
    setUser(e.target.value);
  }

  return (
  <>
    <form  className='form' onSubmit={handleSubmit}>
      <label className='label' htmlFor="User">User Name</label>
      <input type="text" name="username" value={username}  placeholder="Enter Username" onChange={handleUserChange} className="input"/>
      <label htmlFor="User" className='label'>Password </label>
      <input type="password" name="password" value={password} placeholder="Enter password" onChange={handlePassChange} 
      className="input"/>
      <input className='btn-submit'type="submit" value={"Submit"}/>
    </form>
  </>
  )
  
}

