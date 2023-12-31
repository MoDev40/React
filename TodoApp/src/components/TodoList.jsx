import { useState,useEffect } from "react"
import useTodo from "../TodoListContext"

const TodoList = ({list})=>{
    const {removeTodo} = useTodo()
    const [isChecked,setIsChecked] = useState(false)

    const removeHandle = ()=>{
        removeTodo(list)
    }
    return(
        <div className="list-container">
            <div className="content">
                <h4 className={`${isChecked&& "checkedbox"}`}>{list.content}</h4>
            </div>
            <input type="checkbox" onClick={(e)=>setIsChecked(e.target.checked)} />
             <span className="delete"
             onClick={removeHandle}
             >Remove</span>
        </div>
    )
}
export default TodoList