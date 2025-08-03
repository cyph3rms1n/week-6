import { useState, useEffect, useMemo } from "react"
// import axios from "axios"
function App() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    let finalVal = useMemo(() =>{
        let sum = 0;
        for(let i =0; i<= inputValue; i++){
            sum = sum + i;
        }
        return sum;
    }, [inputValue]);
    console.log(finalVal);

    return <div>
        <input onChange={ function(e) {
            setInputValue(e.target.value);
        }} placeholder={"find the sum from 1 to n"}></input>

        <br/>
        Sum from 1 to {inputValue} is {finalVal}
        <br/>

        <button onClick={ () => {
            setCounter(counter + 1);
        }}>count : {counter}</button>

    </div>
}

export default App
