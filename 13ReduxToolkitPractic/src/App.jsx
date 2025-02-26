import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './componants/Todoadd'
import TodoItem from './componants/TodoItem'

function App() {
 

  return (
    <>
      <AddTodo/>
      <TodoItem/>
      
    </>
  )
}

export default App
