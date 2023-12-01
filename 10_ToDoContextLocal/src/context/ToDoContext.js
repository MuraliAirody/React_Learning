import React,{createContext,useContext} from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addToDo:()=>{},
    updateToDo:()=>{},
    deleteToDo:()=>{},
    checkComplete:()=>{}
})


export const ToDoContextProvider=ToDoContext.Provider

export function useToDo(){
    return useContext(ToDoContext)
}