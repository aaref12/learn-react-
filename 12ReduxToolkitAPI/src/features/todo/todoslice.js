import { createSlice ,nanoid} from "@reduxjs/toolkit";



const initialState={
    todos:[{id:1,Text:"Hello word"}]
}


export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addtodo :(state, action)=>{
         const todo={
            id:nanoid(),
            Text:action.payload
         }
        state.todos.push(todo)
        },
        removetod:(state,action)=>{
          state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
          state.todos.filter((todo)=>{
            if(todo.id===action.payload.id) {
               todo.Text=action.payload
            }
          })
        }
    
    }
})



export const {addtodo,removetod,updateTodo}=todoSlice.actions


export default todoSlice.reducer
