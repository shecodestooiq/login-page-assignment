import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
function Sign(){
    const [name,setName]=useState('fatima')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handlechangename =(e)=>{
        setName(e.target.value);
    } 
    const handlechangeemail =(e)=>{
        setEmail(e.target.value);
    }
    const handlechangepassword =(e)=>{
        setPassword(e.target.value);
    }
    const handlechangensubmit =(e)=>{
        console.log('you are in')
        
    }
   
    const navigate=useNavigate();  
    
return(
    <>
    <form onSubmit={handlechangensubmit}>
        <div>
            <label>Name</label>
            <input type="text" name="name" value={name}
        onChange={handlechangename}/>
        </div> 
        <div>
            <label>email</label>
            <input type="email" name="email" value={email}
        onChange={handlechangeemail}/>
        </div>
        <div>
            <label>password</label>
            <input type="password" name="password" value={password}
        onChange={handlechangepassword}/>
        </div>
<button type="submit" onClick={()=>navigate("/Newcontext")} >Submit</button>
        </form></>
)
}

export default Sign;