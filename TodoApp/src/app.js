import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import './style.css'
import TodoLists from "./components/TodoLists"
const App = ()=>{
    return(
        <div className="container">
            <Header/>
            <TodoInput/>
            <TodoLists/>
        </div>
    )
}
export default App