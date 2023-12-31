import { useRef, useState } from "react";
import useTodo from "../TodoListContext";
const TodoInput = ()=>{
    const {addTodo,contents} = useTodo()
    const [todoList,setTodoList] = useState()
    let clearRef = useRef()
    const submitHandle = (e)=>{
        e.preventDefault();
        if(!todoList){
            return
        }
        let newlist = {
            id:contents.length,
            content: todoList
        }
        addTodo([newlist])
        setTodoList("")
        clearRef.current.value = ""    
        clearRef.current.focus()        
    }
    return(
        <div className="todo-container">
            <h3>Todo Input</h3>
            <div className="todo">
            <form onSubmit={submitHandle}>
                <label>Input</label>
                <input ref={clearRef} type="text" 
                    onChange={(e)=> setTodoList(e.target.value)}
                />
                <button className="btn-add">ADD</button>
            </form>
            </div>
        </div>
    )
}
export default TodoInput