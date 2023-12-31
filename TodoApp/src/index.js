import {createRoot} from 'react-dom/client'
import App from './app'
import { TodoListProvider } from './TodoListContext'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <TodoListProvider>
        <App/>
    </TodoListProvider>
)