import { useState, useEffect } from "react"
import axios from "axios"

function App() {
    const [selectedId, setSelectedId] = useState(1);

    return (
        <div>
            <button onClick={() => setSelectedId(1)}>1</button>
            <button onClick={() => setSelectedId(2)}>2</button>
            <button onClick={() => setSelectedId(3)}>3</button>
            <Todo id={selectedId} />
        </div>
    );
}

function Todo({ id }) {
    const [todo, setTodo] = useState({});

    useEffect(() => {
<<<<<<< HEAD
        axios.get("")
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


=======
        axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
            .then(response => {
                setTodo(response.data.todo);
            });
    }, [id]);

    return (
        <div>
            <h1>{todo.title}</h1>
            <h4>{todo.description}</h4>
        </div>
    );
}

>>>>>>> 8f9f4a7 (tired)
export default App
