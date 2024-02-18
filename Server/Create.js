import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Example() {
  const navi = useNavigate();
  const[name,setName]=useState("");
  const[pass,setPass]=useState("");
  const[conpass,setConpass]=useState("");

  function reg(){
    axios.post('http://localhost:4900/crtuser',{
      Name:name,password:pass,conpass:conpass
    })
    .catch(err=>console.log(err))
    
    navi('/View')
  }

  return (
    <div>
      <form><br></br>
      <table className='tables'/>
      <h3>Login Form</h3>
        <label for="Username">Username</label><br></br>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>
            <label for="Password">Password</label><br></br>
            <input type="password" value={pass} onChange={(e)=>{setPass(e.target.value)}}/><br></br>
            <label for="Confirm Password">Confirm Password</label><br></br>
            <input type="password" value={conpass} onChange={(e)=>{setConpass(e.target.value)}}/><br></br><br></br>
            <button onClick={reg} href='/view'>Submit</button>
        
    </form>
    </div>
  )
}
