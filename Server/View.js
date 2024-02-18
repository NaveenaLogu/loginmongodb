import React from 'react'
import axios from'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
export default function View() {
  const [view,setView] = useState([]);
  const navi = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:4900/user')
    .then((item)=>setView(item.data))
    .catch(err=>console.log(err))
  })

  function deluser(id){
    axios.delete('http://localhost:4900/deluser/'+id);
    alert("Profile Deleted")
    
  }
  return (
    <div>
         <a  href='/'>Add User +</a>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {
              view.map((dat)=>{
                return(
                  <tr>
                    <td>{dat.Name}</td>
                    <td>{dat.password}</td>
                    <td>{dat.conpass}</td>
                    <td>
                        <Link to={'/edit/'+dat._id} className='btn btn-primary'>Update</Link>
                        <button className='btn btn-danger' onClick={()=>{deluser(dat._id)}}>Delete</button>
                       
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>
    </div>
  )
}


