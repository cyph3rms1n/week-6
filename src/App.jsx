// Testing Refactor in App.jsx
import { useState, memo,Fragment } from "react"

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title: "Work Hard",
    description: "Give your best"
  }, {
    id: 2,
    title: "Work your a** off",
    description: "Give every thing you have"
  }, {
    id: 3,
    title: "Giving up for better tomorrow",
    description: "Do whatevver it takes"
  }])

function addTodos(){
  /*
    * Two ways to add new todos in the array, use any one of them
    * Prefer first one, sligthtly better and cleaner code compared to second one .
  */
  // 1st method: Spread all the todos in the array and then add the new todos
  setTodos([...todos, {
    id: todos.length + 1,
    title: Math.random(),
    description: Math.random()
  }])

  // 2nd Method: Create a new todos array let say newTodos and add all the todos form the todos array and then add your new todos

  // const newTodos = [];
  // for(let i =0; i<todos.length; i++){
  //   newTodos.push(todos[i]);
  // }

  // newTodos.push({
  //   id:todos.length + 1,
  //   title: Math.random(),
  //   description: Math.random()
  // })

}

  return (
    <div>
      <button onClick={addTodos}>Add Todo</button>
      { /* Iterate over todos array and render all the todos */}
      {/* First way to do it */}
      {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description={todo.description} />)}

      {/* Second way to do it */}
      {todos.map(function(todo) {
        return <Todo key = {todo.id} title = {todo.title} description = {todo.description} />
      })}
    </div>
  )
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}


export default App
