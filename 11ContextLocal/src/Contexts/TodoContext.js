import {createContext, useContext} from 'react'


export const TodoContext=createContext({
    Todos:[
        {
            id:1,
            todo:'Todo msg',
            complated:false,
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    dilateTodo:(id)=>{},
    ToggleComplate:(complated)=>{}
})



export const  useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider
