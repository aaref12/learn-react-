import { useState,useContext } from "react"
import React from 'react'


import  Usercontaxt from '../contaxt/Usercontaxt'
function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const {setUser}=useContext(Usercontaxt)
    const Handlelogin=(e)=>{
      e.preventDefault()
      setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="UsrName"/>
        <input type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"/>
        <button onClick={Handlelogin}>Login</button>
    </div>
  )
}

export default Login