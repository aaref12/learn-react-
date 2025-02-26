import React, { useState } from 'react'
import {AddTodo} from '../feutures/TodoSlice'
import {useDispatch} from 'react-redux'

function todoadd() {
const [input,setinput]=useState('')
const dispatch=useDispatch()
const addtodohandler=(e)=>
 {e.preventDefault()
dispatch(AddTodo(input))
setinput('')
}

  return (
    <>
    <form onSubmit={addtodohandler}>
        <input type='text' 
        value={input} 
        onChange={(e)=>setinput(e.target.value)}
        />
        <button  type='submit'>add todo</button>
    </form>
    </>
  )
}

export default todoadd