import React from 'react'
import UserContextProvider from './contaxt/UsercontaxtProvider'
import Login from './componants/Login.jsx'
import Profile from './componants/Profile.jsx'


function App() {
  

  return (
    <UserContextProvider>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
