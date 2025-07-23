import { useState, useEffect } from "react"
import axios from "axios"

function App() {
    
    const[todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(function(response) {
                setTodos(response.data.todos);
            })
    }, [])
    return <>
        {todos.map(todo => <Todo key = {todo.id} title = {todo.title} descripton = {todo.description} />)}
    </>
}

function Todo({title, description}){
    return <div>
        <h1>{title}</h1>
        {description}
    </div>
}


export default App
