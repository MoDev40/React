import useTodo from "../TodoListContext"
import TodoList from "./TodoList"

const TodoLists = ()=>{
    const {contents} = useTodo()
    return(
        <div className="lists-container">
            <h3 style={{textAlign:"center"}}>{contents.length == 0 ? "Lists is Empty" : "Todo Lists"}</h3>
            {   
                contents.map(element =>(
                    <TodoList key={element.id} list={element}/>
                ))
            }
        </div>
    )
}

export default TodoLists