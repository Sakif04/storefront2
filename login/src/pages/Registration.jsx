import axios from "axios";
import { useState } from "react";


function Registration(props) {
    const tokenurl='http://127.0.0.1:8000/auth';
    const [formInput,SetInputs]=useState({
        firstname:'',
        lastname:'',
        email:'',
        username:'',
        password:'',


    });
    const handleChange=(e)=>{
        SetInputs(
            {...formInput,
                [e.target.name]:e.target.value
            }
        )

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const nameInput=e.target.username.value;
        const firstname=e.target.firstname.value;
        const lastname=e.target.lastname.value;
        const passInput=e.target.password.value;
        const data={
            firstname:firstname,
            lastname:lastname,
            username:nameInput,
            email:email,
            password:passInput
        }

        axios.post(tokenurl,)
        SetInputs(
            {   firstname:'',
                lastname:'',
                email:'',
                username:'',
                password:'',
            }
        )
        
        
    }
  
    return (
    <form  className='form' onSubmit={handleSubmit}>
        <div className="form-input firstname">
            <label className='label' htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" value={formInput.firstname} onChange={handleChange}   className="input"/>
            
        </div>       
        <div className="form-input lastname">
            <label className='label' htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" onChange={handleChange}  value={formInput.lastname}    className="input"/>
        </div>
        <div className="form-input username">
            <label className='label' htmlFor="User">User Name</label>
            <input type="text" name="username" onChange={handleChange}  value={formInput.username}    className="input"/>
        </div>
        <div className="form-input email">
            <label htmlFor="password" className='label' >Email </label>
            <input type="email" name="email" onChange={handleChange}  value={formInput.email}  className="input"/>
        </div>
        <div className="form-input password">
        <label htmlFor="password" className='label' >Password </label>
            <input type="password" onChange={handleChange}  name="password" value={formInput.password} className="input"/>
        </div>
        
        <input className='btn-submit'type="submit" value={"Submit"} />
  </form>
    
  )
}

Registration.propTypes = {}

export default Registration
