import React from 'react'
import { useContext } from 'react'
import Usercontaxt from '../contaxt/Usercontaxt'


export default function Profile() {
  const { user } = useContext(Usercontaxt)
  if(!user) return <h1>Please Login</h1>
  return (
    <div>
      <h1>Profile</h1>
      <h2>Welcome {user.username}</h2>
    </div>
  )

}

