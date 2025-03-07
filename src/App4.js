import React from "react";
import { useState } from "react";
export default function App4(){
    // const [email,setEmail]=useState();
    // const [password,setPassword]=useState();
    const [user,setUser]=useState({});
    const [msg,setMsg]=useState();
    const handleSubmit=()=>{
        if(user.email==="varu@gmail.com"&&user.password==="1234"){
            setMsg("Welcome Vardhana!")
        }else{
            setMsg("Access Denied")
        }
    };
    return(
        <div>
            <h3>Login Form</h3>
            {msg}
            <p><input type="text" onChange={(event)=>setUser({...user,email:event.target.value})}></input></p>
            <p><input type="password" onChange={(event)=>setUser({...user,password:event.target.value})}></input></p>
            <button onClick={handleSubmit}>Log In</button>
        </div>
    );
}