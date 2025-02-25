import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './componants/Addtodo'
import Todo from './componants/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Redux Toolkit</h1>
      <Addtodo/>
      <Todo/>
    </>
  )
}

export default App
