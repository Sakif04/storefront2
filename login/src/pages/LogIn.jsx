import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const tokenurl="http://127.0.0.1:8000";
const login_key='/auth/jwt/create/';
const refresh_key='/auth/jwt/refresh';



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
    const token= await axios.post(tokenurl+login_key,data,
      {
        headers:{
        Accept: "application/json",
          'Content-Type':'application/json;charset=UTF-8'
      }  
    }).then(res=>res.data)
      console.log(token);

    if (token.refresh){
      setPassword('');
      setUser('');
      const acces_token= await axios.post(tokenurl+refresh_key,{"refresh":token.refresh},{
        headers:{
          Accept:"application/json;",
          'Content-Type':'application/json;charset=UTF-8'
        }
      }).then(s=>s.data)
      token.access=acces_token.access;

      
      acces_token?localStorage.setItem("storefront",JSON.stringify(token)):null;


    }

  }
  
  
  function handleUserChange(e){
    setUser(e.target.value);
  }

  return (
  <>
    <form  className='form' onSubmit={handleSubmit}>
      <div className="username">
        <label className='label' htmlFor="User">User Name</label>
        <input type="text" name="username" value={username}  placeholder="Enter Username" onChange={handleUserChange} className="input"/>
      </div>
      <div className="username">
        <label htmlFor="User" className='label'>Password </label>
        <input type="password" name="password" value={password} placeholder="Enter password" onChange={handlePassChange} 
        className="input"/>
      </div>
        <input className='btn-submit'type="submit" value={"Submit"}/>
      
    </form>
  </>
  )
  
}

