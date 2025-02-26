import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { RemoveTodo } from '../feutures/TodoSlice'

function TodoItem() {

   const todos= useSelector(state=>state.todos)
   const dispatcch=useDispatch()
  return (
    <>
   <div>todos</div>
  <ul>
    {
        todos.map((todo)=>{
            
       <li key={todo.id}>
        <div>{todo.text}</div>
        <button onClick={()=>dispatcch(RemoveTodo(todo.id))}>remove</button>
       </li>
        })
    }
</ul>

    </>
  )
}

export default TodoItem
    