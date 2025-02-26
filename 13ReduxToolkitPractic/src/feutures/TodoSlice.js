import { createSlice,nanoid} from '@reduxjs/toolkit'



const initialState={
    todos:[{
        id:1,
        text:'hello word'
    }]
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        AddTodo:(state,action)=>{
           const todo={
             id:nanoid(),
             text:action.payload
           }
           state.todos.push(todo)

        },
        RemoveTodo:(action,state)=>{
          state.todos=state.todos.filter((todo)=>todo.id !==action.payload.id)
        }
    }
})


export  const {AddTodo,RemoveTodo}=todoSlice.actions


export  default todoSlice.reducer

