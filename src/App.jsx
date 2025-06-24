import React, { useState } from 'react';
// Testing Refactor in App.jsx

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header title = "Novamaster"></Header>
      <Header title="persiphone"></Header>
    </div>
  )
}

function Header ({title}){
  return <div>
    {title}
  </div>
}

export default App
