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
      <div className='bg-cyan-500 w-full rounded-2xl'>
      <h1 className='text-4xl font-bold'>Todos </h1>
      <p className='text-white'>useing Redux Toolkit</p>
      </div>
      <Addtodo/>
     
      <Todo/>
    </>
  )
}

export default App
