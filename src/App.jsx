// Testing Refactor in App.jsx
import { useState, memo,Fragment } from "react"

function App() {
  const [titleToChange, setTitle] = useState("My name is sam");

  function updateTitle(){
    setTitle("My name is: "+ Math.random());
  }

  return (
    <fragment>
    <button onClick={updateTitle}>Change title</button>
    <Header title ={titleToChange}></Header>
    <Header title="persiphone"></Header>
    <Header title="persiphone_viper"></Header>
    <Header title="persiphone_serpent"></Header>
    </fragment>
  )
}

const Header = memo(function Header({title}){
  return <div>
    {title}
  </div>
})

export default App
