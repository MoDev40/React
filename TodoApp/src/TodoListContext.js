import { createContext, useContext, useReducer } from "react";
import todoListReducer,{ intialstate } from "./todoListReducer";

const TodoListContext = createContext(intialstate)

export const TodoListProvider = ({children})=>{
    const [state,dispatch] = useReducer(todoListReducer,intialstate)
    const addTodo = (lists)=>{
        const updatedList = state.contents.concat(lists)
        dispatch({
            type:"ADD_TO_LIST",
            payload:updatedList
        })
    }

    const removeTodo = (remoList)=>{
        const updatedList = state.contents.filter( remoCont => remoCont.id !==remoList.id)
        dispatch({
            type:"REMOVE_FROM_LIST",
            payload: updatedList
        })
    }

    let values = {
        contents: state.contents,
        addTodo,
        removeTodo
    }
    return <TodoListContext.Provider value={values}>
        {children}
    </TodoListContext.Provider>
}
const useTodo = ()=>{
    const context = useContext(TodoListContext)
    if(context === undefined){
        throw new Error("Undiff")
    }
    return context
}

export default useTodo