import { React } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title = " Novamaster"></Header>
      <Header title="persiphone"></Header>
    </>
  )
}

function Header ({title}){
  return <div>
    {title}
  </div>
}

export default App
