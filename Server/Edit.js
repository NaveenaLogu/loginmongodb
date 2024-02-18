import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
  const[name,setName]=useState("");
  const[pass,setPass]=useState("");
  const[conpass,setConpass]=useState("");
  const navi = useNavigate();


  const {id} = useParams()
useEffect(()=>{
  axios.get('http://localhost:4900/user/'+id)
  .then(items=>{
    setName(items.data.Name)
    setPass(items.data.password)
    setConpass(items.data.conpass)
  })
},[])

function updatedata(){
    axios.put('http://localhost:4900/updateuser/'+id,{
      Name:name,password:pass,conpass:conpass
    })
    navi('/View')
}
  return (
    <div>
       <form><br></br>
      <h3>Edit Form</h3>
        <label for="Username">Username</label><br></br>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /><br></br>
            <label for="Password">Password</label><br></br>
            <input type="text" value={pass} onChange={(e)=>{setPass(e.target.value)}} /><br></br>
            <label for="Confirm Password">Confirm Password</label><br></br>
            <input type="text" value={conpass} onChange={(e)=>{setConpass(e.target.value)}}/><br></br><br></br>
            <button onClick={updatedata} >Submit</button>
    </form>
    </div>
  )
}
